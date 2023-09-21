import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/app/store';

interface filtersState {
  category: string;
  difficalty: string;
}

const initialState: filtersState = {
  category: '',
  difficalty: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setDifficalty: (state, action: PayloadAction<string>) => {
      state.difficalty = action.payload;
    },
  },
});

export const { setCategory, setDifficalty } = filterSlice.actions;

export const filterStore = (state: RootState) => state.filter;
