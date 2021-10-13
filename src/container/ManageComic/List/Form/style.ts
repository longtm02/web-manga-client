import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    config: {
      marginTop: '24px',
      '& button': {
        margin: '0px 12px',
      },
    },
  })
);
