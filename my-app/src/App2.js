import { useState } from "react";

const App2=()=>{
  // const name="hong";
  const [name, setName] = useState("hong")
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [todos, setTodos] = useState([
    "study",
    "cooking",
    "sleeping",
    "surfing",
  ]);

  return (
    <div>
      {name} <br/>
      {count}
      {isVisible && <p>visible text</p>}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div>
        <button onClick={()=>{setName("가나다")}}>이름변경</button>
        <button onClick={()=>{setCount(count+1)}}>숫자변경</button>
        <button onClick={()=>{setIsVisible(!isVisible)}}>글자버튼</button>
        <button onClick={()=>{
         setTodos((prevTodos) => [...prevTodos, "add todo list"]);
          }}>할일버튼</button>
      </div>
    </div>
  );
}

export default App2;