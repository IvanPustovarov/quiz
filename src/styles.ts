import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  root: {
    background: 'red',
    color: 'white',
  },
  wrapper: {
    color: 'white',
  },
  active: {
    color: 'yellow',
  },
}));
