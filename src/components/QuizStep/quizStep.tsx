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

type Props = {
  quiz: AnswerResult;
};

export function QuizStep({ quiz }: Props) {
  const createOneArrayOfQuestion = () => {
    const arrayAnswer = [...quiz.incorrect_answers, quiz.correct_answer];
    const shuffledArray = arrayAnswer.sort(() => 0.5 - Math.random());
    return shuffledArray;
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 500 }}>
      <CardContent>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">{decodeHTML(quiz.question)}</FormLabel>
          <RadioGroup aria-labelledby="radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
            {createOneArrayOfQuestion().map((item, index) => (
              <FormControlLabel value={item} control={<Radio />} key={index} label={item} />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button>Ответить</Button>
      </CardActions>
    </Card>
  );
}
