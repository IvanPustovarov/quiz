import { useStyles } from './styles';
import { HomeScreen } from './components/HomeScreen/HomeScreen';

const App = () => {
  const { classes, cx } = useStyles();
  const isActive = false;
  return (
    <div
      className={cx(classes.root, {
        [classes.active]: isActive,
      })}
    >
      <HomeScreen />
    </div>
  );
};

export default App;
