import { Button } from '@mui/material';
import { setScreenShowed, resetUserAnswer, homescreenStore } from '../HomeScreen/homescreenSlice';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { useStyles } from './styles';

export function FinishScreen() {
  const dispatch = useAppDispatch();
  const homeStore = useAppSelector(homescreenStore);
  const { classes } = useStyles();

  const handleGoToStart = () => {
    dispatch(resetUserAnswer());
    dispatch(setScreenShowed('start'));
  };

  return (
    <div className={classes.root}>
      <div>Тест пройден!</div>
      <div>Ваш счёт: {homeStore.userScore}</div>
      <Button variant="contained" onClick={handleGoToStart}>
        Заново
      </Button>
    </div>
  );
}
