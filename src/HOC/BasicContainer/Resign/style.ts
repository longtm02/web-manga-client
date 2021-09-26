import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '12px 24px',
      '& > div': {
        width: 425,
        marginBottom: 12,
      },
    },
    buttonLogin: {
      width: '100%',
    },
  })
);
