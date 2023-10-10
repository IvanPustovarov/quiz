import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/app/store';
import { AnswerResult, CategoryAnswer } from '../components/QuizStep/quizStep.types';

interface filtersState {
  questionCount?: number;
  category?: string;
  difficalty?: AnswerResult['difficulty'] | '';
  categories: CategoryAnswer[];
  isScreenShowed: ScreenState;
  userStep: number;
  correctUsersAnswers: UserAnswer[];
  userScore: number;
}

export type UserAnswer = {
  correct: string;
  userAnswer: string;
};

type ScreenState = 'start' | 'process' | 'finish';

const initialState: filtersState = {
  questionCount: undefined,
  category: undefined,
  difficalty: '',
  categories: [],
  isScreenShowed: 'start',
  userStep: 0,
  userScore: 0,
  correctUsersAnswers: [],
};

export const homescreenSlice = createSlice({
  name: 'homescreen',
  initialState,
  reducers: {
    setDifficalty: (state, action: PayloadAction<AnswerResult['difficulty'] | ''>) => {
      state.difficalty = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload.toString();
    },
    setResetQuestionsParams: (state) => {
      state.category = '';
      state.isScreenShowed = 'start';
      state.difficalty = '';
      state.questionCount = 0;
    },
    addUserAnswer: (state, action: PayloadAction<UserAnswer>) => {
      state.correctUsersAnswers = [...state.correctUsersAnswers, action.payload];
    },
    setQuestionCount: (state, action: PayloadAction<number>) => {
      state.questionCount = action.payload;
    },
    setScreenShowed: (state, action: PayloadAction<ScreenState>) => {
      state.isScreenShowed = action.payload;
    },
    setIncrementQuestionStep: (state, action: PayloadAction<number>) => {
      state.userStep = action.payload;
    },
    resetUserAnswer: (state) => {
      state.correctUsersAnswers = [];
      state.category = '';
      state.isScreenShowed = 'start';
      state.difficalty = '';
      state.questionCount = 0;
      state.userStep = 0;
      state.userScore = 0;
    },
    calculateUserScore: (state) => {
      for (let index = 0; index < state.correctUsersAnswers.length; index++) {
        const element = state.correctUsersAnswers[index];
        if (element.userAnswer === element.correct) {
          state.userScore = state.userScore + 1;
        }
      }
    },
  },
});

export const {
  setCategory,
  setDifficalty,
  setQuestionCount,
  setScreenShowed,
  setIncrementQuestionStep,
  setResetQuestionsParams,
  addUserAnswer,
  resetUserAnswer,
  calculateUserScore,
} = homescreenSlice.actions;

export const homescreenStore = (state: RootState) => state.homescreen;
