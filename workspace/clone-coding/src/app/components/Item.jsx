import React from "react";

const Item = ({ isEnter, onMouseOverToEnter, onMouseOutToLeave,index,item,clickItems, onClickItem }) => {
  return (
    
      <li onClick={()=>{onClickItem(item.id)}}
        className={isEnter[index] ? "enter" : "leave"}
        onMouseEnter={()=>{onMouseOverToEnter(index)}}
        onMouseLeave={()=>{onMouseOutToLeave(index)}}
      >
        <div className="select">
          <p className="select-content">
            <span>{item.content}</span>
          </p>
          <div className="select-price">
            <div>{item.price}</div>
          </div>
        </div>
      </li>
      
    
  );
};

export default Item;
