import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  root: {
    background: 'black',
    color: 'white',
  },
  wrapper: {
    color: 'white',
  },
  active: {
    color: 'yellow',
  },
}));
