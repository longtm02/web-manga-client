import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {},
    linkTitle: {
      padding: '32px',
      position: 'relative',
      '&::before': {
        content: '""',
        background: 'linear-gradient(180deg,#f80,#ea3c2a)',
        borderRadius: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        left: 0,
        position: 'absolute',
        display: 'block',
        height: '40px',
        width: '8px',
      },
      '& > a': {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'black',
      },
    },
  })
);
