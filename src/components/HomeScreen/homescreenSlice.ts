import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/app/store';
import { AnswerResult, CategoryAnswer } from '../QuizStep/quizStep.types';

interface filtersState {
  questionCount?: number;
  category?: string;
  difficalty?: AnswerResult['difficulty'] | '';
  categories: CategoryAnswer[];
  isScreenShowed: ScreenState;
  userStep: number;
  correctUsersAnswers: UserAnswer[];
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
      console.log(state.correctUsersAnswers);
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
      setResetQuestionsParams();
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
} = homescreenSlice.actions;

export const homescreenStore = (state: RootState) => state.homescreen;
