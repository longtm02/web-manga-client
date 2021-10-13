import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    title: {},
    iconStatistic: {
      marginRight: 12,
    },
    buttonCategory: {
      marginRight: '12px !important',
      marginTop: '12px !important',
      textTransform: 'capitalize !important' as any,
    },
    buttonAction: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 145,
      marginTop: 12,
      marginRight: 12,
      padding: '5px 0px',
      borderRadius: 45,
      cursor: 'pointer',
      color: 'white',
      transition: 'all ease 0.2s',
      '&:nth-child(1)': {
        background: '#8bc34a',
      },
      '&:nth-child(2)': {
        background: '#ff2853',
      },
      '&:nth-child(3)': {
        background: '#bd10e0',
      },
      '&:nth-child(4)': {
        background: '#209cee',
      },

      '& > img , & > svg': {
        width: 24,
        height: 24,
        marginRight: 6,
      },
      '&:hover': {
        opacity: 0.8,
      },
    },
  })
);
