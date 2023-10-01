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

import { homescreenStore, setIncrementQuestionStep } from '../HomeScreen/homescreenSlice';
import { useAppSelector, useAppDispatch } from '~/app/hooks';

type Props = {
  quiz?: AnswerResult;
  questionIndex: number;
};

export function QuizStep({ quiz, questionIndex }: Props) {
  const createOneArrayOfQuestion = () => {
    if (quiz) {
      const arrayAnswer = [...quiz.incorrect_answers, quiz.correct_answer];
      const shuffledArray = arrayAnswer.sort(() => 0.5 - Math.random());
      return shuffledArray;
    }
    return [];
  };

  const homeStore = useAppSelector(homescreenStore);
  const dispatch = useAppDispatch();

  const handleSetAnswer = (answer: string) => {
    console.log(answer);
  };

  const handleSetupResponse = () => {
    dispatch(setIncrementQuestionStep(questionIndex + 1));
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
          <RadioGroup aria-labelledby="radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
            {createOneArrayOfQuestion().map((question, index) => (
              <FormControlLabel
                value={question}
                control={<Radio />}
                key={index}
                onClick={() => handleSetAnswer(question)}
                label={decodeHTML(question)}
              />
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
