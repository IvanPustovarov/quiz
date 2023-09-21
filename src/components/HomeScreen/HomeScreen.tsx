import { useGetQuestionByParamsQuery, useGetCategoryQuery } from '~/api/api';
import { Button } from '@mui/material';
import { useStyles } from './styles';
import { ErrorComponent } from '~/components/ErrorComponent/errorComponent';
import { LoadingComponent } from '~/components/loadingComponent/loadingComponent';
import SharedSelect from '../SharedSelect/SharedSelect';
import { difficultySelect } from '../SharedSelect/mockSelectData';

import { useAppDispatch } from '~/app/hooks';
import { setCategory, setDifficalty } from './filtersSlice';

import { SelectChangeEvent } from '@mui/material/Select';

export function HomeScreen() {
  const { data, isLoading, isError } = useGetQuestionByParamsQuery({ type: 'boolean', amount: '10' });
  const { data: category } = useGetCategoryQuery('');

  const dispatch = useAppDispatch();
  const { classes } = useStyles();

  const handleRequest = () => {};

  const handleSelectCategory = (option: SelectChangeEvent) => {
    dispatch(setCategory(option.target.value));
  };

  const handleSelectDifficalty = (option: SelectChangeEvent) => {
    dispatch(setDifficalty(option.target.value));
  };

  if (isLoading) {
    return <ErrorComponent />;
  }
  if (isError) {
    return <LoadingComponent />;
  }
  return (
    <div className="home-container">
      <h1>Здравствуй!</h1>
      <p>Предлагаю насладится тестам из нескольких вариантов ответа на выбранные или случайные темы</p>
      <p>Ниже можно задать параметры</p>
      <p>Если не задать параметры, то вопросы будут созданы по умолчанию</p>

      <SharedSelect handleSelectOption={handleSelectCategory} label="Категория" options={category?.trivia_categories} />

      <SharedSelect handleSelectOption={handleSelectDifficalty} label="Сложность" options={difficultySelect} />

      <Button variant="contained" onClick={handleRequest} className={classes.root}>
        Поехали
      </Button>
    </div>
  );
}
