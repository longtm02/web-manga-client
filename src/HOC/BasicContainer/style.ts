import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    containerFull: {
      width: '100%',
      minHeight: '200vh',
      background: '#f5f5f5',
    },
    container: {
      maxWidth: 1200,
      margin: 'auto',
      background: 'white',
    },
  })
);
