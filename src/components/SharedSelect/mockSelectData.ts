import { Category, QuestionDifficulty } from '../QuizStep/quizStep.types';

export type QuestionDifficultyRus = 'легко' | 'средне' | 'тяжело';

export const rusDifficulties: Record<QuestionDifficulty, QuestionDifficultyRus> = {
  easy: 'легко',
  medium: 'средне',
  hard: 'тяжело',
};

export interface SelectOptions {
  id: number;
  name: Category | (typeof rusDifficulties)[keyof typeof rusDifficulties];
}

export interface SelectCategoryOption {
  id: number;
  name: string;
}

export type SelectUnionOption = Pick<difficultyType, 'rusName' | 'id' | 'name'>;

interface difficultyType {
  id: number;
  name: QuestionDifficulty;
  rusName: (typeof rusDifficulties)[keyof typeof rusDifficulties];
}

export const difficultySelect: difficultyType[] = [
  {
    id: 1,
    name: 'easy',
    rusName: 'легко',
  },
  {
    id: 2,
    name: 'medium',
    rusName: 'средне',
  },
  {
    id: 3,
    name: 'hard',
    rusName: 'тяжело',
  },
];
