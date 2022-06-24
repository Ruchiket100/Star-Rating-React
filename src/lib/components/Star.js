import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, setSelectedStars = (f) => f }) => {
  return (
    <FaStar onClick={setSelectedStars} color={selected ? 'yellow' : 'grey'} />
  );
};

export default Star;
