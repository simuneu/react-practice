import { useState } from "react";

const HandlerEx=()=>{
  const [value, setValue] = useState("Hello World!");
  const [color, setColor] = useState("black")
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible&&(
        <p style={{color:color}}>{value}</p>
      )}<br/>

      <div>
        <button onClick={()=>{setValue("Goodbye World")}}>변경</button>

        <button onClick={()=>{setColor("black")}}>검정색</button>
        <button onClick={()=>{setColor("blue")}}>파란색</button>
        <button onClick={()=>{setColor("red")}}>빨간색</button>
        
        <button onClick={()=>{setIsVisible(false)}}>사라짐..</button>
        <button onClick={()=>{setIsVisible(true)}}>보임..</button>
      </div>
    </>
  )
}

export default HandlerEx;