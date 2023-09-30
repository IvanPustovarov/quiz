import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  wrapper: {
    color: 'white',
  },
  active: {
    color: 'yellow',
  },
}));
