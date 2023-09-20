import { useGetQuestionByParamsQuery } from '~/api/api';
import { Button } from '@mui/material';
import { useStyles } from './styles';
import { ErrorComponent } from '~/components/ErrorComponent/errorComponent';
import { LoadingComponent } from '~/components/loadingComponent/loadingComponent';

export function HomeScreen() {
  const { data, isLoading, isError } = useGetQuestionByParamsQuery({ type: 'boolean', amount: '10' });
  console.log({ data });

  const { classes } = useStyles();

  const handleRequest = () => {
    console.log('hererere');
  };

  if (isLoading) {
    return <ErrorComponent />;
  }
  if (isError) {
    return <LoadingComponent />;
  }
  return (
    <div className="home-container">
      <h1>Здравствуй!</h1>
      <p>Предлагаю насладится тестам из нескольких вариантов ответа на выбранные или случайные темы</p>
      <p>Ниже можно задать параметры</p>
      <p>Если не задать параметры, то вопросы будут созданы по умолчанию</p>

      <Button variant="contained" onClick={handleRequest} className={classes.root}>
        Поехали
      </Button>
    </div>
  );
}
