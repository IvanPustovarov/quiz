import { QuizStep } from '../QuizStep/quizStep';
import { useGetQuestionByParamsQuery } from '~/api/api';
import { useStyles } from './styles';
import { useAppSelector, useAppDispatch } from '~/app/hooks';
import { homescreenStore, setScreenShowed, setCategory, setDifficalty, setQuestionCount } from '../HomeScreen/homescreenSlice';
import { Button } from '@mui/material';
import { LoadingComponent } from '../loadingComponent/loadingComponent';

export function StepContainer() {
  const { classes } = useStyles();
  const homeStore = useAppSelector(homescreenStore);
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetQuestionByParamsQuery({
    amount: homeStore.questionCount?.toString(),
    difficulty: homeStore.difficalty,
    category: homeStore.category,
  });

  const handleTryAgain = () => {
    dispatch(setScreenShowed(true));
    dispatch(setCategory(0));
    dispatch(setDifficalty(''));
    dispatch(setQuestionCount(0));
  };

  const QuestionToRender = () => {
    const question = data?.results[homeStore.userStep];
    return question;
  };

  if (isLoading) {
    return <LoadingComponent></LoadingComponent>;
  }
  if (data?.results.length === 0) {
    return (
      <div>
        <p>Похоже, что вопросы не загрузились. Попробуйте снова</p>
        <Button onClick={handleTryAgain}>Попробовать снова</Button>
      </div>
    );
  }
  return (
    <>
      {QuestionToRender() ? (
        <div className={classes.root}>
          {<QuizStep questionIndex={homeStore.userStep} key={QuestionToRender()?.correct_answer} quiz={QuestionToRender()} />}
        </div>
      ) : null}
    </>
  );
}
