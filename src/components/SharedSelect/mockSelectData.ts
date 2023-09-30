import { QuestionDifficulty } from '../QuizStep/quizStep.types';

export type QuestionDifficultyRus = 'легко' | 'средне' | 'тяжело';

export const rusDifficulties: Record<QuestionDifficulty, QuestionDifficultyRus> = {
  easy: 'легко',
  medium: 'средне',
  hard: 'тяжело',
};

export interface SelectOptions {
  id: number;
  name: string;
}

export type SelectUnionOption = Pick<DifficultyType, 'rusName' | 'id' | 'name'>;

interface DifficultyType {
  id: number;
  name: QuestionDifficulty;
  rusName: string;
}

export const difficultySelect: DifficultyType[] = [
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
