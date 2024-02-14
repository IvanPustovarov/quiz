import { useStyles } from './styles';
import QuizPage from './pages/QuizPage/QuizPage';
import { useAppSelector } from '~/app/hooks';
import { homescreenStore } from './store/homescreenSlice';
import FinishPage from './pages/FinishScreen/FinishPage';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  const { classes } = useStyles();
  const selectHomeStore = useAppSelector(homescreenStore);
  return (
    <div className={classes.root}>
      {selectHomeStore.isScreenShowed === 'start' ? (
        <HomePage />
      ) : selectHomeStore.isScreenShowed === 'process' ? (
        <QuizPage />
      ) : selectHomeStore.isScreenShowed === 'finish' ? (
        <FinishPage />
      ) : null}
    </div>
  );
};

export default App;
