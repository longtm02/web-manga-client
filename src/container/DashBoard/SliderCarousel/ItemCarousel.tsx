import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './style';

interface ItemCarouselProps {
  srcImage: string;
  description: string;
  link: string;
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({
  srcImage,
  description,
  link,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classes.containerItemCarousel}
      style={{ backgroundImage: `url(${srcImage})` }}
    >
      <div>
        <div>
          <p> {description} </p>
        </div>
        <Link to={link}> View </Link>
      </div>
    </div>
  );
};

export default ItemCarousel;
