import React from "react";
import SelectBoxContainer from "./SelectBoxContainer";

const ItemContainer = ({onClickToShowPopUp,items,clickItems,onClickPlusOrMinus,onClickXButoon}) => {
  const title = (<dt className="container-title">상품 선택</dt>);
  return (
    <dl className="container">
      {title}
      <SelectBoxContainer items={items} onClickToShowPopUp={onClickToShowPopUp} 
      clickItems={clickItems} onClickPlusOrMinus={onClickPlusOrMinus} onClickXButoon={onClickXButoon}/>
    </dl>
  );
};

export default ItemContainer;
