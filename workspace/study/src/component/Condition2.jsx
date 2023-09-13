import React from 'react';

const Condition2 = ({ age }) => {
  return <div>{age % 2 === 0 && <h2>당첨</h2>}</div>;
};

export default Condition2;
