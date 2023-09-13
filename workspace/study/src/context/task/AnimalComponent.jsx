import React from 'react';

const AnimalComponent = ({animal,deleteAnimal}) => {
    return (
        <li>
            <button onClick={()=>deleteAnimal(animal)}>{animal}</button>   
        </li>
    );
};

export default AnimalComponent;