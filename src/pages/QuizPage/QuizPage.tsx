import { QuizStep } from '../../components/QuizStep/quizStep';
import { useGetQuestionByParamsQuery } from '~/api/api';
import { useStyles } from './styles';
import { useAppSelector, useAppDispatch } from '~/app/hooks';
import { homescreenStore, setResetQuestionsParams } from '../../store/homescreenSlice';
import { Box, Button } from '@mui/material';
import { LoadingComponent } from '../../components/loadingComponent/loadingComponent';
import { AnswerResult } from '../../components/QuizStep/quizStep.types';

export default function QuizPage() {
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

  const QuestionToRender = (): AnswerResult | undefined => {
    if (!data) return;
    const question = data.results[selectHomeStore.userStep];
    return question;
  };

  if (isLoading) {
    return <LoadingComponent />;
  }
  if (data?.results.length === 0) {
    return (
      <Box>
        <Box component="p"> Похоже, что вопросы не загрузились. Попробуйте снова</Box>
        <Button onClick={handleTryAgain}>Попробовать снова</Button>
      </Box>
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
