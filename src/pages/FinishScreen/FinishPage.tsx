import { Box, Button } from '@mui/material';
import { setScreenShowed, resetUserAnswer, homescreenStore } from '../../store/homescreenSlice';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { useStyles } from './styles';

export default function FinishPage() {
  const dispatch = useAppDispatch();
  const selectHomeStore = useAppSelector(homescreenStore);
  const { classes } = useStyles();

  const handleGoToStart = () => {
    dispatch(resetUserAnswer());
    dispatch(setScreenShowed('start'));
  };

  return (
    <Box className={classes.root}>
      <Box>Тест пройден!</Box>
      <Box>Ваш счёт: {selectHomeStore.userScore}</Box>
      <Button variant="contained" onClick={handleGoToStart}>
        Заново
      </Button>
    </Box>
  );
}
