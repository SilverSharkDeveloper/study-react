import React, { useState } from 'react';

const Name = () => {
  const [name, setName] = useState("");
  const onChangeName = (e) => {
    console.log(e);
    setName(e.target.value)
 
  };
  return ( 
    <div>
        <h1>{name}</h1>
      <input type={'text'} onChange={onChangeName}></input>
    </div>
  );
};

export default Name;
