import { AnswerResult } from '~/components/QuizStep/quizStep.types';

const BASE_URL = 'https://opentdb.com/api.php';

export const mockQuiz: AnswerResult[] = [
  {
    category: 'History',
    type: 'boolean',
    difficulty: 'easy',
    question: 'What you know about rolling down in the deep ?',
    correct_answer: 'Yes',
    incorrect_answers: ['No', 'Mabye'],
  },
  {
    category: 'Animals',
    type: 'boolean',
    difficulty: 'hard',
    question: 'What you kn asd aaaaaaaaaa ?',
    correct_answer: '1',
    incorrect_answers: ['2', '3'],
  },
  {
    category: 'Entertainment: Board Games',
    type: 'boolean',
    difficulty: 'easy',
    question: 'Which of the following car models has been badge-engineered (rebadged) the most?',
    correct_answer: 'Isuzu Trooper',
    incorrect_answers: ['Holden Monaro', 'Suzuki Swift', 'Chevy Camaro'],
  },
];
