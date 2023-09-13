import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFontsize } from '../modules/font';

const FontSize = () => {
    const fontsize = useSelector(state => state.fontsize)
    const dispatcher = useDispatch()
    return (
      <div>
        <input onKeyUp={(e)=>{
          if(e.key==="Enter"){
            dispatcher(changeFontsize(e.target.value))
          }
        }}></input>
        <p style={{fontSize:fontsize}}>재미있는 리덕스! 😂</p>
      </div>
    );
};

export default FontSize;