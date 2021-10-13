import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: '12px',
      fontSize: '1.15rem',
      height: 75,
      borderBottom: '1px solid rgba(0,0,0,0.1)',
    },
    logo: {
      maxHeight: '100%',
      width: '135px',
      cursor: 'pointer',
      '& > img': {
        height: '57px',
      },
    },
    search: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      '& > div': {
        border: '1px solid rgba(0,0,0,0.3)',
        width: '530px',
        display: 'flex',
        position: 'relative',
        height: '43px',
        borderRadius: '43px',
        '& > input': {
          width: '100%',
          outline: 'none',
          border: 'none',
          background: 'none',
          paddingRight: '41px',
          paddingLeft: '24px',
          fontSize: '1rem',
          opacity: '0.9',
        },
        '& > button': {
          position: 'absolute',
          right: 0,
          width: '53px',
          height: '100%',
          '& svg': {
            fontSize: '1.2rem',
            color: 'grey',
          },
        },
      },
    },
    config: {
      display: 'flex',
      alignItems: 'center',
      '& > a , & > button': {
        marginLeft: '12px',
        textAlign: 'center',
        padding: '6px 12px',
        fontSize: '1rem',
      },
    },
  })
);
