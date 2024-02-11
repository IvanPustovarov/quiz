import { QuizStep } from '../QuizStep/quizStep';
import { useGetQuestionByParamsQuery } from '~/api/api';
import { useStyles } from './styles';
import { useAppSelector, useAppDispatch } from '~/app/hooks';
import { homescreenStore, setResetQuestionsParams } from '../../store/homescreenSlice';
import { Box, Button } from '@mui/material';
import { LoadingComponent } from '../loadingComponent/loadingComponent';

export function StepContainer() {
  const { classes } = useStyles();
  const selectHomeStore = useAppSelector(homescreenStore);
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetQuestionByParamsQuery({
    amount: selectHomeStore.questionCount?.toString(),
    difficulty: selectHomeStore.difficalty,
    category: selectHomeStore.category,
  });

  const handleTryAgain = () => {
    dispatch(setResetQuestionsParams());
  };

  const QuestionToRender = () => {
    const question = data?.results[selectHomeStore.userStep];
    return question;
  };

  if (isLoading) {
    return <LoadingComponent />;
  }
  if (data?.results.length === 0) {
    return (
      <div>
        <p>Похоже, что вопросы не загрузились. Попробуйте снова</p>
        <Button onClick={handleTryAgain}>Попробовать снова</Button>
      </div>
    );
  }
  if (!QuestionToRender()) {
    null;
  }
  return (
    <Box className={classes.root}>
      <QuizStep questionIndex={selectHomeStore.userStep} key={QuestionToRender()?.correct_answer} quiz={QuestionToRender()} />
    </Box>
  );
}
