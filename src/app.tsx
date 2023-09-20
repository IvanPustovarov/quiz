import { useState } from 'react';
import { useStyles } from './styles';
import { Counter } from './features/counter/counter';

const App = () => {
  const [value, setValue] = useState('demo');
  const { classes, cx } = useStyles();
  const isActive = false;
  return (
    <div
      className={cx(classes.root, {
        [classes.active]: isActive,
      })}
    >
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <h1>{value}</h1>
      <Counter></Counter>
    </div>
  );
};

export default App;
