import { Box } from '@mui/material';
import { useStyles } from './styles';
import { HomeUpperTextWidget } from '~/widgets/HomeTextWidget/HomeUpperTextWidget';
import { HomeOptionWidget } from '~/widgets/HomeOptionsWidget/HomeOptionWidget';
import { HomeButtonWidget } from '~/widgets/HomeDownButtonWidget/HomeButtonWidget';

export default function HomePage() {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <HomeUpperTextWidget />
      <HomeOptionWidget />
      <HomeButtonWidget />
    </Box>
  );
}
