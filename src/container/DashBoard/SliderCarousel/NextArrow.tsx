import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from '@mui/material';
import { useStyles } from './style';

export default function NextArrow(props: any) {
  const classes = useStyles();
  return (
    <Button className={classes.nextArrow} onClick={props.onClick}>
      <NavigateNextIcon />
    </Button>
  );
}
