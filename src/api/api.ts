import { AnswerResult, CategoryAnswerResult, Root } from '~/components/QuizStep/quizStep.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://opentdb.com/';

export type QuestionQueryParams = {
  amount: string;
  type?: AnswerResult['type'];
  difficulty?: AnswerResult['difficulty'];
  category?: AnswerResult['category'];
};

export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getQuestionByParams: builder.query<Root, QuestionQueryParams>({
      query: (params) => ({
        url: 'api.php',
        params,
      }),
    }),
    getCategory: builder.query<CategoryAnswerResult, ''>({
      query: () => 'api_category.php',
    }),
  }),
});

export const { useGetQuestionByParamsQuery, useGetCategoryQuery } = quizApi;
