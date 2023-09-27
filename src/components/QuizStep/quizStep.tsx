import { AnswerResult } from './quizStep.types';

type Props = {
  quiz: AnswerResult;
};

export function QuizStep({ quiz }: Props) {
  return <div>{quiz.correct_answer}</div>;
}
