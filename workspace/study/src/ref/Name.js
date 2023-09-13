import React, { useRef, useState } from 'react';

const Name = () => {
    const [name,setName] = useState("")
    const nameRef = useRef()
    const onAddNim = ()=>{
        nameRef.current.innerText = nameRef.current.innerText + "님"
    }

    const onInputChange = (e)=>{
        setName(e.target.value)
    }

    const onKeyPress = (e)=>{
        if(e.key === "Enter"){
            nameRef.current.innerText = nameRef.current.innerText + "님"
            
        }
    }



    return (
        <div>
            <div>
                <input  type="text" onChange={onInputChange} onKeyUp={onKeyPress}/>
            </div>    
            <p ref={nameRef}>{name}</p>
            <button onClick={onAddNim}>님 붙이기</button>
        </div>
    );
};

export default Name;    