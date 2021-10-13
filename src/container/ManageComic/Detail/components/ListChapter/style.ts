import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    row: {
      cursor: 'pointer',
      '&:hover': { opacity: 0.5 },
    },
  })
);
