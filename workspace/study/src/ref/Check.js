import React, { useRef } from 'react';

const Check = () => {
    const refs = [useRef(),useRef(),useRef()]
    
    const onBtnClick = ()=>{
        if(refs[1].current.value && refs[2].current.value){
            refs[0].current.submit()
        }
    }

    return (
        <div>
            <form ref={refs[0]} action='https://www.google.com'>
                <input ref={refs[1]} type="text" name ='name'></input>
                <input ref={refs[2]} type="text" name ='email'></input>
                <button type='button' onClick={onBtnClick}>완료</button>
            </form>
        </div>
    );
};

export default Check;