import { Button } from '@mui/material';
import { QuizStep } from '../QuizStep/quizStep';
import { useGetQuestionByParamsQuery } from '~/api/api';
import { useAppSelector } from '~/app/hooks';
import { homescreenStore } from '../HomeScreen/homescreenSlice';

export function StepContainer() {
  const homeStore = useAppSelector(homescreenStore);
  const { data, isLoading, isFetching } = useGetQuestionByParamsQuery({
    type: 'boolean',
    amount: homeStore.questionCount?.toString(),
    difficulty: homeStore.difficalty,
    category: homeStore.category,
  });

  console.log(data?.results);

  if (data?.results.length === 0) {
    return <div>Похоже, что вопросы не загрузились</div>;
  }
  return (
    <div>
      {data?.results.map((quiz, index) => (
        <QuizStep key={index} quiz={quiz} />
      ))}
      <Button>Ответить</Button>
    </div>
  );
}
