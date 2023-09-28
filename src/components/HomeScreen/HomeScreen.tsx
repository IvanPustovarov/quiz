import { useGetCategoryQuery } from '~/api/api';
import { useAppDispatch } from '~/app/hooks';

import { Button, Slider, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useStyles } from './styles';

import SharedSelect from '../SharedSelect/SharedSelect';
import { difficultySelect } from '../SharedSelect/mockSelectData';

import { setCategory, setDifficalty, setQuestionCount, setScreenShowed } from './homescreenSlice';

export function HomeScreen() {
  const categoryResult = useGetCategoryQuery('');
  const dispatch = useAppDispatch();

  const { classes } = useStyles();

  const handleSelectCategory = (option: SelectChangeEvent) => {
    const findIdCategory = categoryResult.data?.trivia_categories.find((item) => item.name === option.target.value);
    if (findIdCategory?.id) dispatch(setCategory(findIdCategory.id));
  };

  const difficaltySelectRus = difficultySelect.map(({ rusName }) => ({ name: rusName }));

  const handleSelectDifficalty = (option: SelectChangeEvent) => {
    const findNameDifficalty = difficultySelect.find((item) => item.rusName === option.target.value);
    if (findNameDifficalty?.name) dispatch(setDifficalty(findNameDifficalty.name));
  };

  // 'any' because 'Event' doesnt work
  const handleChangeCountQuestion = (event: any) => {
    dispatch(setQuestionCount(event.target?.value));
  };

  const handleRequestQuestion = () => {
    dispatch(setScreenShowed(false));
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
          defaultValue={10}
          aria-label="Small"
          max={50}
          min={1}
          valueLabelDisplay="auto"
          onChange={handleChangeCountQuestion}
        />
      </Box>

      <Button variant="contained" onClick={handleRequestQuestion} className={classes.root}>
        Поехали
      </Button>
    </div>
  );
}
