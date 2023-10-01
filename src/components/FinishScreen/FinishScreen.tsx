import { Button } from '@mui/material';
import { setScreenShowed, resetUserAnswer, homescreenStore } from '../HomeScreen/homescreenSlice';
import { useAppDispatch, useAppSelector } from '~/app/hooks';

export function FinishScreen() {
  const dispatch = useAppDispatch();
  const homeStore = useAppSelector(homescreenStore);

  const handleGoToStart = () => {
    dispatch(resetUserAnswer());
    dispatch(setScreenShowed('start'));

    console.log(homeStore);
  };

  return (
    <>
      <div>Finish!</div>
      <Button onClick={handleGoToStart}>Заново</Button>
    </>
  );
}
