import React from 'react';

const Component2 = (props) => {
    return (
        <div>
            <h1>{props.name}님 환영합니다.</h1>
        </div>
    );
};
Component2.defaultProps ={
    name :'고객'
}

export default Component2;