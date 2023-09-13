import React, { useRef, useState } from 'react';
import Food from './Food';

const FoodContainer = () => {
const [foods,setFoods] = useState([])
const [foodChecks,setFoodChecks] = useState([])
const inputRefs = useRef([])

const onClickAdd =()=>{
    let food = inputRefs.current[0].value +` (${inputRefs.current[1].value})`
    setFoods([...foods,food])
    setFoodChecks([...foodChecks,false])
    inputRefs.current[0].value=''
    inputRefs.current[1].value=''
}

const onChangeFoodCheck = (e)=>{
    if(e.target.checked){
        foodChecks[e.target.value] = true
    }else{
        foodChecks[e.target.value] = false
    }
    console.log(foodChecks)
    setFoodChecks([...foodChecks])
}

const onClickDelete =()=>{
    setFoods(foods.filter((food,i)=>!foodChecks[i]))
    setFoodChecks(foodChecks.filter((foodCheck,i)=>!foodCheck))
    
}
const foodList = foods.map((food,i)=><Food key={i} food={food} onChangeFoodCheck={onChangeFoodCheck} value={i} ></Food>)

    return (
        <div>
            <input ref={e=>inputRefs.current[0]=e}></input>
            <input  ref={e=>inputRefs.current[1]=e}></input>
            <button onClick={onClickAdd}>추가</button>
            <button onClick={onClickDelete}>삭제</button>
            <div>
              {foodList}
            </div>
        </div>
    );
};

export default FoodContainer;