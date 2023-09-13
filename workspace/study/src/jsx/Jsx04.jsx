import React from 'react';
import Login from '../component/Login';
import LoginFail from '../component/LoginFail';
import NoLogin from '../component/NoLogin';

const Jsx04 = () => {
  // undefined일 경우 JSX 내부에서는 값을 출력하지 않지만,
  // JSX 외부에서 사용될 경우 오류가 발생하므로
  // || 연산자를 사용하여 기본 값을 설정한다.
  const name = undefined || "한동석";
  const login = true;
  const guest = true;
  const style = {color: "red"};

  // JSX는 if문을 사용할 수 없기 때문에 삼항 연산자를 지원한다.
  // 조건식 ? 참일 때 랜더링할 JSX : 거짓일 때 랜더링할 JSX
  // 조건식 && 참일 때 랜더링할 JSX, 거짓이면 아무것도 출력되지 않음
  // &&연산자는 앞의 조건식이 false이면 뒤를 실행하지 않으며, false라는 값은 랜더링되지 않음.





  return (
    <div>
      <div>
        {login && guest && <NoLogin /> }
        {login ? <Login name={name} />:<LoginFail style={style}/>}
      </div>
    </div>
  );
};

export default Jsx04;