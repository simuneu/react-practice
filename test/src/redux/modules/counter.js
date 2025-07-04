const initialState={
  number:0,
}

// 컴포넌트로부터 dispatch를 통해 액션개체를 전달받음
// action안에 있는 type을 스위치 문을 통해 하나씩 검사해서, 일치하는 case
// type과 case가 일치하는 경우, 해당 코드가 실행되고 새 state를 반환(return)
// 리듀서가 새로운 state를 반환하면 그게 새 모듈의 state로 바뀜

const counter = (state = initialState, action)=>{
  console.log(action)
  switch(action.type){
    case "PLUS_ONE":
      return {
        number:state.number +1
      }
    case "MINUS_ONE" :
    return {
      number:state.number -1
    }
    default:
      return state;
  }
}

export default counter;