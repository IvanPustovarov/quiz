import { Category, QuestionDifficulty } from '../QuizStep/quizStep.types';

type QuestionDifficultyRus = 'легко' | 'средне' | 'тяжело';

export const rusDifficulties: Record<QuestionDifficulty, QuestionDifficultyRus> = {
  easy: 'легко',
  medium: 'средне',
  hard: 'тяжело',
};

export interface SelectOptions {
  id: number;
  name: Category | (typeof rusDifficulties)[keyof typeof rusDifficulties];
}

interface difficultyType {
  id: number;
  name: (typeof rusDifficulties)[keyof typeof rusDifficulties];
}

export const difficultySelect: difficultyType[] = [
  {
    id: 1,
    name: 'легко',
  },
  {
    id: 2,
    name: 'средне',
  },
  {
    id: 3,
    name: 'тяжело',
  },
];
