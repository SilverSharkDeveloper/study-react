import React from 'react';
import { useSelector } from 'react-redux';
import ActionImage from './ActionImage';

const ActionImageWrap = ({even}) => {
    const action_image_list = useSelector((state)=>state.actionImageListItems)
    console.log(action_image_list)
    let image_list;
    if(even){
        image_list = action_image_list.filter((item,i)=>(i+1)%2!==0).map((item,i)=><ActionImage item={item} key={i}/>)
    }else{
        image_list = action_image_list.filter((item,i)=>(i+1)%2===0).map((item,i)=><ActionImage item={item} key={i}/>)
    }
   
  return <div class="action-image-wrap">{image_list}</div>;
};

export default ActionImageWrap;
