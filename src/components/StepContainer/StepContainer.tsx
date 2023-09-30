import { QuizStep } from '../QuizStep/quizStep';
import { useGetQuestionByParamsQuery } from '~/api/api';
import { useStyles } from './styles';
import { useAppSelector } from '~/app/hooks';
import { homescreenStore } from '../HomeScreen/homescreenSlice';

export function StepContainer() {
  const { classes } = useStyles();
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
    <div className={classes.root}>
      {data?.results.map((quiz, index) => (
        <QuizStep key={index} quiz={quiz} />
      ))}
    </div>
  );
}
