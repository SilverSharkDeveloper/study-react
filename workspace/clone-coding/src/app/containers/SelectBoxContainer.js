import React from 'react';
import SelectBox from '../components/SelectBox';
import ItemDetails from '../components/ItemDetails';

const SelectBoxContainer = ({ onClickToShowPopUp, items, clickItems,onClickPlusOrMinus,onClickXButoon }) => {
  return (
    <dd className="item-wrap">
      <div className="item-container" onClick={onClickToShowPopUp}>
        <SelectBox />
      </div>
      <ItemDetails items={items} clickItems={clickItems} onClickPlusOrMinus={onClickPlusOrMinus} onClickXButoon={onClickXButoon}/>
    </dd>
  );
};

export default SelectBoxContainer;
