import { Box } from '@mui/material';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function ErrorComponent({ children, title }: Props) {
  return (
    <Box>
      <Box component="span">{title}</Box>
      {children}
    </Box>
  );
}
