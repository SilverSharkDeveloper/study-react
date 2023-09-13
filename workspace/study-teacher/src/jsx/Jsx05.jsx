import React from 'react';
import PassComponent from './PassComponent';
import ErrorComponent from './ErrorComponent';
import WinComponent from './WinComponent';

const Jsx05 = () => {
  const age = 15;
  const isChild = age < 20;
  const isEven = age % 2 === 0;
  // const errorComponent = (<div><h1>{error} 😫</h1></div>);
  // const passComponent = (<div><h1>{pass} 😎</h1></div>);
  // const winComponent = (<div><h2>{win} 🎊</h2></div>)
  const enter = isChild ? <ErrorComponent /> : <PassComponent />;
  const lucky = isEven && <WinComponent />
  return (
    <div>
      {enter}
      {lucky}
    </div>
  );
};

export default Jsx05;