import { useGetQuestionByParamsQuery } from '~/api/api';
import { ErrorComponent } from '~/components/ErrorComponent/errorComponent';
import { LoadingComponent } from '~/components/loadingComponent/loadingComponent';

export function HomeScreen() {
  const { data, isLoading, isError } = useGetQuestionByParamsQuery({ type: 'boolean', amount: '10' });
  console.log({ data });

  if (isLoading) {
    return <ErrorComponent />;
  }
  if (isError) {
    return <LoadingComponent />;
  }
  return <div>Home</div>;
}
