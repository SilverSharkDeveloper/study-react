import React, { useState } from 'react';

const Sounds = () => {
    const[sound,setSound] = useState("울음소리")
    const onCatSound = ()=>{setSound("냐옹")}
    const onDogSound = ()=>{setSound("멍멍")}
    return (
        <div>
            <div>{sound}</div>
            <button onClick={onCatSound}>고양이</button>
            <button onClick={onDogSound}>강아지</button>
        </div>
    );
};

export default Sounds;