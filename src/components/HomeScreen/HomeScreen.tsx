import { useGetCategoryQuery } from '~/api/api';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { homescreenStore } from '~/components/HomeScreen/homescreenSlice';

import { Button, Slider, Box } from '@mui/material';
import { useStyles } from './styles';

import SharedSelect from '../SharedSelect/SharedSelect';
import { SelectOptions, SelectUnionOption, difficultySelect } from '../SharedSelect/mockSelectData';

import { setCategory, setDifficalty, setQuestionCount, setScreenShowed } from './homescreenSlice';

export type Option = SelectUnionOption | SelectOptions;

export function HomeScreen() {
  const categoryResult = useGetCategoryQuery('');
  const dispatch = useAppDispatch();
  const homeStore = useAppSelector(homescreenStore);

  const { classes } = useStyles();

  const handleSelectCategory = (option: Option) => {
    const findIdCategory = categoryResult.data?.trivia_categories.find((item) => item.name === option.name);
    if (findIdCategory?.id) dispatch(setCategory(findIdCategory.id));
  };

  const difficaltySelectRus = difficultySelect.map(({ rusName, id }) => ({ name: rusName, id }));

  const handleSelectDifficalty = (option: Option) => {
    const findNameDifficalty = difficultySelect.find((item) => item.rusName === option.name);
    if (findNameDifficalty?.name) dispatch(setDifficalty(findNameDifficalty.name));
  };

  const handleChangeCountQuestion = (event: Event) => {
    const { target } = event;
    if (target && 'value' in target && typeof target.value === 'number') {
      dispatch(setQuestionCount(target.value));
    }
  };

  const handleRequestQuestion = () => {
    dispatch(setScreenShowed(false));
  };

  const isButtonAvaliable = () => {
    if (homeStore.category && homeStore.difficalty && homeStore.questionCount) return false;
    else return true;
  };

  return (
    <div className="home-container">
      <h1>Здравствуй!</h1>
      <p>Предлагаю насладится тестам из нескольких вариантов ответа на выбранные или случайные темы</p>
      <p>Ниже можно задать параметры</p>
      <p>Если не задать параметры, то вопросы будут созданы по умолчанию</p>

      <SharedSelect handleSelectOption={handleSelectCategory} label="Категория" options={categoryResult.data?.trivia_categories} />
      <SharedSelect handleSelectOption={handleSelectDifficalty} label="Сложность" options={difficaltySelectRus} />

      <Box sx={{ width: 300 }}>
        <Slider
          size="small"
          defaultValue={0}
          aria-label="Small"
          max={50}
          min={0}
          valueLabelDisplay="auto"
          onChange={handleChangeCountQuestion}
        />
      </Box>

      <Button variant="contained" disabled={isButtonAvaliable()} onClick={handleRequestQuestion} className={classes.root}>
        Поехали
      </Button>
    </div>
  );
}
