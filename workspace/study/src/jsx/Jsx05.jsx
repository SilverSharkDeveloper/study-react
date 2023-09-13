import React from 'react';
import Condition1 from '../component/Condition1';
import Condition2 from '../component/Condition2';

const Jsx05 = () => {
  const age = 20;

  return (
    <div>
      <Condition1 age={age}></Condition1>
      <Condition2 age={age}></Condition2>
    </div>
  );
};

export default Jsx05;
