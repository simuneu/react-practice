//import영역
//조상 > 부모 > 자식 연결 예제
//자식에게만 div태그

import './App.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import SubApp from './SubApp';
import App2 from './App2';
import App3 from './App3';
import HandlerEx from './components/ex/HandlerEx'
import App4 from './App4';
import App5 from './App5';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SubApp />
    <App2/>
    <App3/>
  </React.StrictMode>
);

const App=()=>{
  //자바스크립트 사용 영역
  return (
    <div>
      <Grand/>
      <SubApp />
      <App2/>
      <App3/>
      <HandlerEx/>
      <App4/>
      <App5/>
    </div>
  )
}

//가장 바깥
function Grand(){
  const name = "hongsi";
  const animal = "cat"
  return <Parent parentName={name} parentAnimal={animal}/>;
}

//중간 컴포넌트
function Parent(props){
  return <Child parentName={props.parentName} parentAnimal={props.parentAnimal}/>
}

//출력담당
function Child(props){
  const a =6;
  const b= 4;

  const title="Hello World"
  return (
    <>
      <h2>
        my {props.parentAnimal} name is {props.parentName}
      </h2>

      <h2> {3+5==8?"정답입니다":"오답입니다"} </h2>

      <div>
        
        {a>b &&<h3>{a}이 {b}보다 크다.</h3>}
      </div>

      <div>
        <h3 class="h3Title">
          {title}<br/>
        </h3>
        아이디 : <input type="text"></input> <br/>
        비밀번호 : <input type="password"></input> <br/>
      </div>
    </>
  );
}

export default App;
