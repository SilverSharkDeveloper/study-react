import React, { useState } from 'react';

const Color = () => {
  const [color, setColor] = useState('black');
  const [value, setValue] = useState('');
  const onClickBlue = () => {
    setColor('blue');
  };
  const onClickRed = () => {
    setColor('red');
  };
  const onChangeColor = (e) => {
    setValue(e.target.value)

    if (e.target.value === '핑크') {
      setColor('pink');
     
    }
        
    
  };
  const onClickReset = ()=>{
    setValue("")
  }


  return (
    <div>
      <span style={{ color: color }}>즐거운 리액트~</span>
      <button onClick={onClickBlue} style={{ color: 'blue' }}>
        파랑색
      </button>
      <button onClick={onClickRed} style={{ color: 'red' }}>
        빨간색
      </button>
      <input type={'text'} onChange={onChangeColor} value={value}></input>
      <button onClick={onClickReset}>초기화</button>
    </div>
  );
};

export default Color;
