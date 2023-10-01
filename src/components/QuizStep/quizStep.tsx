import { useState, ChangeEvent, useMemo } from 'react';
import { AnswerResult } from './quizStep.types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormLabel from '@mui/material/FormLabel';
import decodeHTML from '~/utils/decoderHTML';
import { Button } from '@mui/material';

import { UserAnswer, homescreenStore, setIncrementQuestionStep, setScreenShowed, addUserAnswer } from '../HomeScreen/homescreenSlice';
import { useAppSelector, useAppDispatch } from '~/app/hooks';

type Props = {
  quiz?: AnswerResult;
  questionIndex: number;
};

export function QuizStep({ quiz, questionIndex }: Props) {
  const [userTemporaryAnswer, setUserTemporaryAnswer] = useState<string>('');

  const createOneArrayOfQuestion = () => {
    if (quiz) {
      const arrayAnswer = [...quiz.incorrect_answers, quiz.correct_answer];
      const shuffledArray = arrayAnswer.sort(() => 0.5 - Math.random());
      return shuffledArray;
    }
    return [];
  };

  const createOneArrayOfQuestionMemo = useMemo(() => createOneArrayOfQuestion(), []);

  const homeStore = useAppSelector(homescreenStore);
  const dispatch = useAppDispatch();

  const handleChangeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setUserTemporaryAnswer((event.target as HTMLInputElement).value);
  };

  const handleSetupResponse = () => {
    if (quiz) {
      const result: UserAnswer = { correct: quiz.correct_answer, userAnswer: userTemporaryAnswer };
      dispatch(addUserAnswer(result));
      dispatch(setIncrementQuestionStep(questionIndex + 1));
    }

    if (homeStore.questionCount && homeStore.userStep === homeStore.questionCount - 1) {
      dispatch(setScreenShowed('finish'));
    }
  };

  const returnButtonNextText = () => {
    if (homeStore.questionCount && questionIndex + 1 > homeStore.questionCount - 1) {
      return 'Завершить';
    }
    return 'Ответить';
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 500 }}>
      <CardContent>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">{quiz ? decodeHTML(quiz.question) : ''}</FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
            value={userTemporaryAnswer}
            onChange={handleChangeAnswer}
          >
            {createOneArrayOfQuestionMemo.map((question, index) => (
              <FormControlLabel value={question} control={<Radio />} key={index} label={decodeHTML(question)} />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button onClick={handleSetupResponse}>{returnButtonNextText()}</Button>
      </CardActions>
    </Card>
  );
}
