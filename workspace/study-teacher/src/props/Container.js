import React from "react";
// import Component1 from './Component1';
import Component2 from "./Component2";

const Container = () => {
  return (
    <div>
      {/* <Component1 name={"한동석"}/> */}
      {/* <Component2 /> */}
      <Component2>
        <span style={{ color: "red" }}>회원</span>
      </Component2>
    </div>
  );
};

export default Container;
