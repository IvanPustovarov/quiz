import { useStyles } from './styles';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { StepContainer } from './components/StepContainer/StepContainer';
import { useAppSelector } from '~/app/hooks';
import { homescreenStore } from './components/HomeScreen/homescreenSlice';
import { FinishScreen } from './components/FinishScreen/FinishScreen';

const App = () => {
  const { classes } = useStyles();
  const homeStore = useAppSelector(homescreenStore);
  return (
    <div className={classes.root}>
      {homeStore.isScreenShowed === 'start' ? (
        <HomeScreen />
      ) : homeStore.isScreenShowed === 'process' ? (
        <StepContainer />
      ) : homeStore.isScreenShowed === 'finish' ? (
        <FinishScreen />
      ) : null}
    </div>
  );
};

export default App;
