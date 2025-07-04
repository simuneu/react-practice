import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  //디스패치 생성
  const dispatch = useDispatch();
  const number = useSelector((state)=>state.counter.number);
  console.log(number)

  return (
    <div className="App">
      {number}
      <button
        onClick={()=>{
          dispatch({type:"PLUS_ONE"})
        }}
      >
        +1
      </button>
      <button
        onClick={()=>{
          dispatch({type:"MINUS_ONE"})
        }}
      >
        -1
      </button>
    </div>
  );
}

export default App;
