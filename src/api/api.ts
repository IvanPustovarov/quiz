import { AnswerResult } from '~/components/QuizStep/quizStep.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://opentdb.com/';

type QuestionQueryParams = {
  amount: string;
  type?: AnswerResult['type'];
  difficulty?: AnswerResult['difficulty'];
  category?: AnswerResult['category'];
};

export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getQuestionByParams: builder.query<AnswerResult, QuestionQueryParams>({
      query: (params) => ({
        url: 'api.php',
        params,
      }),
    }),
  }),
});

export const { useGetQuestionByParamsQuery } = quizApi;
