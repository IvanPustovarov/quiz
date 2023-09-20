import { useAppSelector, useAppDispatch } from '~/app/hooks';

import { decrement, increment, selectCount } from './counterSlice';
import { useGetQuestionByCountQuery } from '~/api/api';
import { ErrorComponent } from '~/components/ErrorComponent/errorComponent';
import { LoadingComponent } from '~/components/loadingComponent/loadingComponent';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useGetQuestionByCountQuery({ type: 'boolean', amount: '10' });
  console.log({ data });

  const handleClick = () => {
    dispatch(increment());
  };

  if (isLoading) {
    return <ErrorComponent />;
  }
  if (isError) {
    return <LoadingComponent />;
  }
  return <div onClick={handleClick}>{count}</div>;
}
