import React, { useState } from 'react';
import Star from './Star';
import styled from 'styled-components';

const StarRating = ({ totalStars = 5 }) => {
  const createArray = (number) => [...Array(number)];
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <RatingDiv>
      <div>
        {createArray(totalStars).map((star, index) => (
          <Star
            key={index}
            selected={selectedStars > index}
            setSelectedStars={() => setSelectedStars(index + 1)}
          />
        ))}
      </div>
      <h2>
        {selectedStars} of {totalStars}
      </h2>
    </RatingDiv>
  );
};

const RatingDiv = styled.div`
  display:flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content : center;
  font-size: 5rem;
`;

export default StarRating;
