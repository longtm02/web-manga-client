import Header from './Header';
import { useStyles } from './style';

const BasicContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerFull}>
      <div className={classes.container}>
        <Header />
      </div>
    </div>
  );
};

export default BasicContainer;
