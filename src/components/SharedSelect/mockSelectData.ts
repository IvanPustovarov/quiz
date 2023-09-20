import { Category, QuestionDifficulty, QuestionType } from '../QuizStep/quizStep.types';

type QuestionDifficultyRus = 'легко' | 'средне' | 'тяжело';

export const rusDifficulties: Record<QuestionDifficulty, QuestionDifficultyRus> = {
  easy: 'легко',
  medium: 'средне',
  hard: 'тяжело',
};

export interface SelectOptions {
  id?: number;
  name?: Category;
  category?: Category;
  type?: QuestionType;
  difficulty?: QuestionDifficulty;
  question?: string;
  correct_answer?: string;
  incorrect_answers?: string[];
}
