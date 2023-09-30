import { useStyles } from './styles';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { StepContainer } from './components/StepContainer/StepContainer';
import { useAppSelector } from '~/app/hooks';
import { homescreenStore } from './components/HomeScreen/homescreenSlice';

const App = () => {
  const { classes, cx } = useStyles();
  const isActive = false;
  const homeStore = useAppSelector(homescreenStore);
  return (
    <div
      className={cx(classes.root, {
        [classes.active]: isActive,
      })}
    >
      {homeStore.isScreenShowed ? <HomeScreen /> : <StepContainer />}
    </div>
  );
};

export default App;
