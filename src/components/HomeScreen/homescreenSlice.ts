import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/app/store';
import { AnswerResult, CategoryAnswer } from '../QuizStep/quizStep.types';

interface filtersState {
  questionCount?: number;
  category?: string;
  difficalty?: AnswerResult['difficulty'] | '';
  // questions: AnswerResult[];
  categories: CategoryAnswer[];
  isScreenShowed: boolean;
}

const initialState: filtersState = {
  questionCount: undefined,
  category: undefined,
  difficalty: '',
  // questions: [],
  categories: [],
  isScreenShowed: true,
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
