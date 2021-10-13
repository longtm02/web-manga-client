import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '0px 12px',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: 32,
    },
    imageContainer: {
      '&:hover': {
        '& > div': {
          boxShadow: '0 0 14px -1px var(--card_boxshadow_hover_color,#f80)',
          '& > img': {
            transform: 'scale(1.1)',
          },
        },
      },
    },
    image: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: `url(/imageError.jpg)`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      transition: 'all ease 0.4s',
      '& > img': {
        width: '100%',
        transition: 'all ease 0.3s',
      },
    },
    config: {
      fontWeight: 'bold',
      '& > h4': {
        fontSize: '1.25rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      '& > span': {
        color: '#808080',
        opacity: '0.6',
      },
    },
  })
);
