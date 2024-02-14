import { Box } from '@mui/material';
import { useStyles } from './styles';

export function HomeUpperTextWidget() {
  const { classes } = useStyles();
  return (
    <>
      <Box component="h1">Добро пожаловать!</Box>
      <Box component="p" className={classes.paragraph}>
        Предлагаю насладится тестами из нескольких вариантов ответа на выбранную тему. <br />
        Ниже можно задать параметры.
      </Box>
    </>
  );
}
