import React from 'react';

const Food = ({ id, name }) => {
  return <li key={id}>{name}</li>;
};

export default Food;
