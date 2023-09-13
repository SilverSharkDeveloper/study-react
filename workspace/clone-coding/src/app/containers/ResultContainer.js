import React from 'react';
import Result from '../components/Result';

const ResultContainer = ({clickItems}) => {
  return (
    <div className="result-wrap">
      <Result clickItems={clickItems}/>
    </div>
  );
};

export default ResultContainer;