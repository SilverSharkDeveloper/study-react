import React from 'react';

const Result = ({ clickItems }) => {
  let total = 0;
  clickItems.forEach((item) => {
    total += Number(item.price.replace('원', '').replace(",","")) * item.count;
  });
  return (
    <div className="result-content-wrap">
      <div className="result-container">
        <span className="total-price">총 상품금액 :</span>
        <span className="number">{total.toLocaleString()}</span>
        <span className="won">원</span>
      </div>
    </div>
  );
};

export default Result;
