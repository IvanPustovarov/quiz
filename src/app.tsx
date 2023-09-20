import { useState } from 'react';
import { useStyles } from './styles';

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
    </div>
  );
};

export default App;
