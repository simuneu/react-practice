import { useState } from "react";

const App5=()=>{
  return (
    <div>
      <h1>렌더링 예제</h1>
      <Counter/>
    </div>
  );
}

function Counter(){
  console.log('Counter component rendering')

  const [count, setCount] =useState(0)
  const increment=()=>{
    setCount(count+1)
  }
  
  return (
     <div>
      <h2>count: {count}</h2>
      <button onClick={increment}>증가</button>
    </div>
  )
}
export default App5;