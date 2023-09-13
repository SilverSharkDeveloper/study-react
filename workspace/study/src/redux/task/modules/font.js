//경로 설정

import { createAction, handleActions } from "redux-actions"

const FONTSIZE = 'font/FONTSIZE'

//액션 생성
export const changeFontsize = createAction(FONTSIZE)

//초기값 설정
const initialState = {
    fontsize: "12px"
  }

//reducer 생성
const font = handleActions({
    // 분기 처리
    // action에 있는 payload에 전달받은 파라미터가 담긴다.
    //자바스크립트 객체에 [키값]을 쓰는것은 변수로 인식하라는 뜻
    [FONTSIZE]: (state, action) => {console.log(action.payload); return({fontsize: action.payload+"px"})}
  }, initialState);
  
  export default font;