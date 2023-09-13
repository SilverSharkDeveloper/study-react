import React from 'react';
import AnimalComponent from './AnimalComponent';
import { AnimalConsumer, AnimalProvider } from './AnimalContext';

// Context에 저장된 동물 세 마리를 출력
// 추가(인풋), 삭제(체크박스)을 클릭하면 Context에 선언해놓은 추가, 삭제 함수를 사용한다.

const AnimalContainer = () => {

  
    

  return (
    <AnimalProvider>
        <AnimalConsumer>
            {(context)=>{
                return(
                    <>
                        <input onKeyUp={(e)=>{
                            console.log(e)
                            if(e.key==="Enter"){
                                context.action.insertAnimal(e.target.value)
                            }
                        }
                        }></input>
                        {context.state.animals.map(animal=><AnimalComponent animal={animal} deleteAnimal={context.action.deleteAnimal}></AnimalComponent>)}

                    </>
                )
            }}
        </AnimalConsumer>
    </AnimalProvider>
  );
};

export default AnimalContainer;