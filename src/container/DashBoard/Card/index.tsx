import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router';
import { useStyles } from './style';

interface CardProps {
  className?: string;
  link: string;
  data: any;
}

const Card: React.FC<CardProps> = (props) => {
  const history = useHistory();
  const { className, data, link } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.container, className)}
      onClick={() => history.push(link)}
    >
      <div className={classes.imageContainer}>
        <div className={classes.image}>
          <img src={data.thumbnail} alt="" />
        </div>
      </div>
      <div className={classes.config}>
        <h4> {data.name} </h4>
        <span> {data.another_name} </span>
      </div>
    </div>
  );
};

export default Card;
