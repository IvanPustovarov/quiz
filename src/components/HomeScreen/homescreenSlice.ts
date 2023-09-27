import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/app/store';
import { AnswerResult, CategoryAnswer } from '../QuizStep/quizStep.types';

interface filtersState {
  questionCount: number;
  category: AnswerResult['category'];
  difficalty: AnswerResult['difficulty'];
  // questions: AnswerResult[];
  categories: CategoryAnswer[];
  isScreenShowed: boolean;
}

const initialState: filtersState = {
  questionCount: 1,
  category: 'Entertainment: Film',
  difficalty: 'easy',
  // questions: [],
  categories: [],
  isScreenShowed: true,
};

export const homescreenSlice = createSlice({
  name: 'homescreen',
  initialState,
  reducers: {
    setDifficalty: (state, action: PayloadAction<AnswerResult['difficulty']>) => {
      state.difficalty = action.payload;
    },
    setCategory: (state, action: PayloadAction<AnswerResult['category']>) => {
      state.category = action.payload;
    },
    // setQuestionArray: (state, action: PayloadAction<AnswerResult[]>) => {
    //   for (let index = 0; index < action.payload.length; index++) {
    //     const element = action.payload[index];
    //     state.questions.push(element);
    //   }
    // },
    setQuestionCount: (state, action: PayloadAction<number>) => {
      state.questionCount = action.payload;
    },
    setScreenShowed: (state, action: PayloadAction<boolean>) => {
      state.isScreenShowed = action.payload;
    },
  },
});

export const { setCategory, setDifficalty, setQuestionCount, setScreenShowed } = homescreenSlice.actions;

export const homescreenStore = (state: RootState) => state.homescreen;
