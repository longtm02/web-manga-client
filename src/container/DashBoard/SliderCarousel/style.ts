import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      '& .slick-dots': {
        position: 'absolute',
        bottom: 0,
      },
    },
    containerItemCarousel: {
      height: '450px',
      width: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      '& > div': {
        marginLeft: '70px',
      },
      '& > div > div': {
        color: 'white',
        width: '50%',
        background: 'rgba(0,0,0,0.5)',
        padding: '12px 24px',
        marginBottom: '6px',
        '& > p': {
          fontSize: '1rem',
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: '1.2rem',
          maxHeight: '6rem',
        },
      },
      '& > div > a': {
        background: theme.palette.secondary.light,
        padding: '6px 24px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'white',
      },
      '&:hover': {},
    },
    nextArrow: {
      position: 'absolute !important' as 'absolute',
      top: '50%',
      right: 0,
      transform: 'translate(0px , -50%)',
      zIndex: 99,
      color: 'white !important',
      '& svg': {
        width: 50,
        height: 100,
      },
    },
    prevArrow: {
      position: 'absolute !important' as 'absolute',
      top: '50%',
      left: 0,
      transform: 'translate(0px , -50%)',
      zIndex: 99,
      color: 'white !important',
      '& svg': {
        width: 50,
        height: 100,
      },
    },
  })
);
