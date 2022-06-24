import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ totalStars = 5, style = {}, ...props }) => {
  const createArray = (number) => [...Array(number)];
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <div style={{ padding: 5, ...style }} {...props}>
      {createArray(totalStars).map((star, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          setSelectedStars={() => setSelectedStars(index + 1)}
        />
      ))}
    </div>
  );
};

export default StarRating;
