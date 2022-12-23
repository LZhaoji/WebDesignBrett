import Reorder from "./jsx/Reorder";

import './css/Global.css';

import {useState} from 'react';

function App() {
  const [number, setNumber] = useState(5);
  let flag = number > 0;
  const clickPlus = () => setNumber(number + 1);
  const clickMinus = (e) => flag ? setNumber(number - 1) : e.preventDefault();
  const clickReorder = () => setNumber(number + 5);

  return (
    <div className='root'>
      <span key={number}>Current Number is: {number}</span>
      <button onClick={clickPlus}>+1</button>
      <button disabled={!flag} onClick={clickMinus}>-1</button>
      {
        !flag ? 
          <Reorder onReorder={clickReorder}/> : ''
      }
    </div>
  );
}

export default App;
