import React from 'react';

const Food = ({food,onChangeFoodCheck,value,foodCheck}) => {
    
    return (
        <div>
            <input type="checkbox" onClick={onChangeFoodCheck} value={value} ></input>
            {food}   
        </div>
    );
};

export default Food;