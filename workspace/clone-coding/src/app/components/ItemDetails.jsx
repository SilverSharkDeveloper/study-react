import React from 'react';
import { useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetails = ({ items, clickItems,onClickPlusOrMinus,onClickXButoon }) => {
  console.log(clickItems)
  const itemDetailList = clickItems.map((item, i) => <ItemDetail item={item} 
  onClickPlusOrMinus={onClickPlusOrMinus} onClickXButoon={onClickXButoon} />);
  return <div className="item-detail">{itemDetailList}</div>;
};

export default ItemDetails;
