import { Button } from '@mui/material';
import { QuizStep } from '../QuizStep/quizStep';
import { QuizRootAnswer } from '../QuizStep/quizStep.types';
import { useGetQuestionByParamsQuery } from '~/api/api';
import { useAppSelector } from '~/app/hooks';
import { homescreenStore } from '../HomeScreen/homescreenSlice';

const mockArray: QuizRootAnswer = {
  response_code: 0,
  results: [
    {
      category: 'Sports',
      type: 'multiple',
      difficulty: 'medium',
      question: 'A stimpmeter measures the speed of a ball over what surface?',
      correct_answer: 'Golf Putting Green',
      incorrect_answers: [' Football Pitch', 'Cricket Outfield', 'Pinball Table'],
    },
    {
      category: 'Geography',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Which of the following countries banned the use of personal genetic ancestry tests?',
      correct_answer: 'Germany',
      incorrect_answers: ['Austria', 'Canada', 'Sweden'],
    },
  ],
};

export function StepContainer() {
  const homeStore = useAppSelector(homescreenStore);
  const { data, error, isLoading, isFetching } = useGetQuestionByParamsQuery({
    type: 'boolean',
    amount: homeStore.questionCount.toString(),
    difficulty: homeStore.difficalty,
    category: homeStore.category,
  });

  return (
    <div>
      {mockArray.results.map((quiz, index) => (
        <QuizStep key={index} quiz={quiz} />
      ))}
      <Button>Ответить</Button>
    </div>
  );
}
