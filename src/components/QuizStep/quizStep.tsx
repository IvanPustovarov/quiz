import { useAppSelector, useAppDispatch } from '~/app/hooks';

import { decrement, increment, selectCount } from './quizSlice';

export function quizStep() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  return <div onClick={handleClick}>{count}</div>;
}
