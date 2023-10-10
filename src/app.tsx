import { useStyles } from './styles';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { StepContainer } from './components/StepContainer/StepContainer';
import { useAppSelector } from '~/app/hooks';
import { homescreenStore } from './store/homescreenSlice';
import { FinishScreen } from './components/FinishScreen/FinishScreen';

const App = () => {
  const { classes } = useStyles();
  const selectHomeStore = useAppSelector(homescreenStore);
  return (
    <div className={classes.root}>
      {selectHomeStore.isScreenShowed === 'start' ? (
        <HomeScreen />
      ) : selectHomeStore.isScreenShowed === 'process' ? (
        <StepContainer />
      ) : selectHomeStore.isScreenShowed === 'finish' ? (
        <FinishScreen />
      ) : null}
    </div>
  );
};

export default App;
