import React from 'react';
import clsx from 'clsx';
import { Grid } from '@mui/material';
import { useStyles } from './style';
import { Link } from 'react-router-dom';
import Card from '../Card/index';

interface RowContentProps {
  className?: string;
  data: any[];
  title: string;
  link: string;
}

const RowContent: React.FC<RowContentProps> = ({
  className,
  data,
  title,
  link,
}) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.container, className)}>
      <Grid item className={classes.linkTitle}>
        <Link to={link}> {title} </Link>
      </Grid>
      <Grid container justifyContent="flex-start" alignItems="center">
        {data.map((e: any, index: number) => {
          return (
            <Grid key={index} item lg={2} md={3} sm={4} xs={6}>
              <Card data={e} link={`/list/${index}`} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RowContent;
