import { QuestionDifficulty } from '../QuizStep/quizStep.types';

const EASY_RU = 'легко';
const MEDIUM_RU = 'средне';
const HARD_RU = 'тяжело';
const EASY = 'easy';
const MEDIUM = 'medium';
const HARD = 'hard';

export type QuestionDifficultyRus = typeof EASY_RU | typeof MEDIUM_RU | typeof HARD_RU;

export const rusDifficulties: Record<QuestionDifficulty, QuestionDifficultyRus> = {
  easy: EASY_RU,
  medium: MEDIUM_RU,
  hard: HARD_RU,
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
    name: EASY,
    rusName: EASY_RU,
  },
  {
    id: 2,
    name: MEDIUM,
    rusName: MEDIUM_RU,
  },
  {
    id: 3,
    name: HARD,
    rusName: HARD_RU,
  },
];
