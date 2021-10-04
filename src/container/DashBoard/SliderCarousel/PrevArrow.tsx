import { Button } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useStyles } from './style';

export default function PrevArrow(props: any) {
  const classes = useStyles();
  return (
    <Button className={classes.prevArrow} onClick={props.onClick}>
      <NavigateBeforeIcon />
    </Button>
  );
}
