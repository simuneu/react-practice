import { useState } from "react";

const App3=()=>{
 
  const [value, setValue] = useState("11");
 
  const onChangeHandler=(event)=>{
    const inputValue= event.target.value;
    setValue(inputValue);
  }
  
  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={value}/>
    </div>
  );
}

export default App3;