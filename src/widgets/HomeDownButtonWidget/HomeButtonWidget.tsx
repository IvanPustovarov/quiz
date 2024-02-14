import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { useStyles } from './styles';
import { homescreenStore } from '~/store/homescreenSlice';

import { setScreenShowed } from '~/store/homescreenSlice';

export function HomeButtonWidget() {
  const selectHomeStore = useAppSelector(homescreenStore);
  const dispatch = useAppDispatch();
  const { classes } = useStyles();

  const handleRequestQuestion = () => {
    dispatch(setScreenShowed('process'));
  };
  const isButtonAvaliable = () => {
    if (selectHomeStore.category && selectHomeStore.difficalty && selectHomeStore.questionCount) return false;
    else return true;
  };
  return (
    <>
      <Button variant="contained" disabled={isButtonAvaliable()} onClick={handleRequestQuestion} className={classes.root}>
        Поехали
      </Button>
    </>
  );
}
