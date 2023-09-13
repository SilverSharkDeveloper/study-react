import React from "react";
import Item from "./Item";

const Items = ({ isEnter, onMouseOverToEnter, onMouseOutToLeave,items,clickItems,onClickItem }) => {
  const itemList= items.map((item,i)=>(
    <Item isEnter={isEnter} onMouseOverToEnter={onMouseOverToEnter} clickItems={clickItems} onClickItem={onClickItem}
     onMouseOutToLeave={onMouseOutToLeave} key={i} index={i} item={item}></Item>
  ))

  return (
    <ul>
     {itemList}
    </ul>
  );
};

export default Items;
