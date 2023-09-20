export interface Root {
  response_code: number;
  results: AnswerResult[];
}

export type QuestionType = 'boolean' | 'multiple';

export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

export type Category =
  | 'Entertainment: Film'
  | 'Entertainment: Comics'
  | 'General Knowledge'
  | 'Entertainment: Books'
  | 'Entertainment: Music'
  | 'Entertainment: Musicals & Theatres'
  | 'Entertainment: Television'
  | 'Entertainment: Video Games'
  | 'Entertainment: Board Games'
  | 'Science & Nature'
  | 'Science: Computers'
  | 'Science: Mathematics'
  | 'Mythology'
  | 'Sports'
  | 'Geography'
  | 'History'
  | 'Politics'
  | 'Art'
  | 'Celebrities'
  | 'Animals'
  | 'Vehicles'
  | 'Entertainment: Comics'
  | 'Science: Gadgets'
  | 'Entertainment: Japanese Anime & Manga'
  | 'Entertainment: Cartoon & Animations';

export interface AnswerResult {
  category: Category;
  type: QuestionType;
  difficulty: QuestionDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
