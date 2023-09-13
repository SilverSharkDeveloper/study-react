import React from 'react';

const Condition1 = ({ age }) => {
  return <div>{age <= 19 ? <h2>입장 불가</h2> : <h2>입장가능</h2>}</div>;
};

export default Condition1;
