import { Box, Slider } from '@mui/material';
import SharedSelect from '~/components/SharedSelect/SharedSelect';
import { useGetCategoryQuery } from '~/api/api';
import { useAppDispatch } from '~/app/hooks';
import { SelectOptions, SelectUnionOption, difficultySelect } from '~/components/SharedSelect/mockSelectData';
import { setCategory, setDifficalty, setQuestionCount } from '~/store/homescreenSlice';

export type Option = SelectUnionOption | SelectOptions;

export function HomeOptionWidget() {
  const categoryResult = useGetCategoryQuery('');
  const dispatch = useAppDispatch();

  const difficaltySelectRus = difficultySelect.map(({ rusName, id }) => ({ name: rusName, id }));

  const handleSelectCategory = (option: Option) => {
    const findIdCategory = categoryResult.data?.trivia_categories.find((item) => item.name === option.name);
    if (findIdCategory?.id) {
      dispatch(setCategory(findIdCategory.id));
    }
  };

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
  return (
    <>
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
    </>
  );
}
