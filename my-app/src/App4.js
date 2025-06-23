import { useState } from "react"

const App4=()=>{
  const [items, setItems] = useState([1,2,3])

  const addItem = ()=>{
    setItems([...items, items.length+1]);
  }

  const removeItem =(index)=>{
    setItems(items.filter((_, i)=> i !== index));
  }
  return(
    <>
       <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>아이템 추가</button>
    </>
  ) 
}

export default App4;