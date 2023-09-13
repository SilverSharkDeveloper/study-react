import React, { useState } from 'react';
import ResultContainer from './containers/ResultContainer';
import ItemContainer from './containers/ItemContainer';
import PopUpContainer from './containers/PopUpContainer';

const App = () => {
  const items = [
    {
      id: 1,
      content: '[헤라] 블랙 쿠션(리필포함) 17C1',
      price: '59,400원',
    },
    {
      id: 2,
      content: '[헤라] 블랙 쿠션(리필포함) 17N1',
      price: '59,400원',
    },
    {
      id: 3,
      content: '[헤라] 블랙 쿠션(리필포함) 21C1',
      price: '59,400원',
    },
    {
      id: 4,
      content: '[헤라] 블랙 쿠션(리필포함) 21N1',
      price: '59,400원',
    },
    {
      id: 5,
      content: '[헤라] 블랙 쿠션(리필포함) 23C1',
      price: '59,400원',
    },
    {
      id: 6,
      content: '[헤라] 블랙 쿠션(리필포함) 23N1',
      price: '59,400원',
    },
  ];

  const [showPopUp, setShowPopUp] = useState(false);
  const [clickItems,setClickItems] = useState([])
  const onClickItem = (id)=>{
    if(clickItems.filter((item,i)=>item.id===id).length===0){
      let newItem = items.filter((item,i)=>item.id===id)[0]
      newItem = {...newItem,count:1}
      setClickItems([...clickItems,newItem])
    }else{
      alert("이미 고른 상품입니다.")
    }
    setShowPopUp(!showPopUp);
  }
  const onClickPlusOrMinus =(id,plus)=>{
    if(plus){
      let newClickItems = clickItems.map((item,i)=>{
        if(item.id===id){
          item.count++
          return item
        }else
        return item
      })
      setClickItems(newClickItems)
    }else{
      if(clickItems.filter((item,i)=>item.id===id)[0].count===1){
        alert("수량은 1보다 적을 수 없습니다.")
        return
      }else{
        let newClickItems = clickItems.map((item,i)=>{
          if(item.id===id){
            item.count--
            return item
          }else
          return item
        })
        setClickItems(newClickItems)
      }
    }
  }
  const onClickXButoon = (id)=>{
    setClickItems(clickItems.filter((item,i)=>item.id!==id))
  }

  const onClickToShowPopUp = () => {
    setShowPopUp(!showPopUp);
  };
  return (
    <div className="wrap">
      <PopUpContainer items={items} showPopUp={showPopUp} clickItems={clickItems} onClickItem={onClickItem}/>
      <ItemContainer items={items}onClickToShowPopUp={onClickToShowPopUp} clickItems={clickItems}  
      onClickPlusOrMinus={onClickPlusOrMinus} onClickXButoon={onClickXButoon}/>
      <ResultContainer clickItems={clickItems}/>
    </div>
  );
};

export default App;
