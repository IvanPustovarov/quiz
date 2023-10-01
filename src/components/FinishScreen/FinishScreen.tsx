import { Button } from '@mui/material';
import { setScreenShowed, setResetQuestionsParams } from '../HomeScreen/homescreenSlice';
import { useAppDispatch } from '~/app/hooks';

export function FinishScreen() {
  const dispatch = useAppDispatch();

  const handleGoToStart = () => {
    dispatch(setScreenShowed('start'));
    dispatch(setResetQuestionsParams());
    // TODO: обнулить состояния вопросов.
  };

  return (
    <>
      <div>Finish!</div>
      <Button onClick={handleGoToStart}>Заново</Button>
    </>
  );
}
