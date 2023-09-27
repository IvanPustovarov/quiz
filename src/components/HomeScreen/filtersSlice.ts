import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/app/store';
import { AnswerResult, CategoryAnswer } from '../QuizStep/quizStep.types';

interface filtersState {
  questionCount: number;
  category: string;
  difficalty: string;
  questions: AnswerResult[];
  categories: CategoryAnswer[];
}

const initialState: filtersState = {
  questionCount: 1,
  category: '',
  difficalty: '',
  questions: [],
  categories: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setDifficalty: (state, action: PayloadAction<string>) => {
      state.difficalty = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setQuestionArray: (state, action: PayloadAction<AnswerResult[]>) => {
      for (let index = 0; index < action.payload.length; index++) {
        const element = action.payload[index];
        state.questions.push(element);
      }
    },
    setQuestionCount: (state, action: PayloadAction<number>) => {
      state.questionCount = action.payload;
    },
  },
});

export const { setCategory, setDifficalty, setQuestionArray, setQuestionCount } = filterSlice.actions;

export const filterStore = (state: RootState) => state.filter;
