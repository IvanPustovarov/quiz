import { AnswerResult } from './quizStep.types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type Props = {
  quiz: AnswerResult;
};

export function QuizStep({ quiz }: Props) {
  const createOneArrayOfQestion = () => {
    const arrayAnswer = [...quiz.incorrect_answers, quiz.correct_answer];
    const shuffledArray = arrayAnswer.sort(() => 0.5 - Math.random());
    return shuffledArray;
  };

  return (
    <div>
      <FormControl>
        <FormLabel id="radio-buttons-group-label">{quiz.question}</FormLabel>
        <RadioGroup aria-labelledby="radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
          {createOneArrayOfQestion().map((item, index) => (
            <FormControlLabel value={item} control={<Radio />} key={index} label={item} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
