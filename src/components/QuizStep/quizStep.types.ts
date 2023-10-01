export interface QuizRootAnswer {
  response_code: number;
  results: AnswerResult[];
}

export interface CategoryAnswer {
  id: number;
  name: string;
}

export interface CategoryAnswerResult {
  trivia_categories: CategoryAnswer[];
}

export interface AnswerResult {
  category: string;
  type: QuestionType;
  difficulty: QuestionDifficulty | '';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export type QuestionType = 'boolean' | 'multiple';

export type QuestionDifficulty = 'easy' | 'medium' | 'hard';
