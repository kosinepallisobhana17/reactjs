import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [input,setInput] =useState('');
const [result,setResult] =useState('0');
   
  const Handler = e =>{
    setInput (e.target.value);
   }
  
  return (
    <div>
      <center>
        
          <input type="text" name="input"  value={input} onChange={Handler} /><br/>
        <button onClick ={() => setResult(eval(input))}>Result</button>
         <h2>Result is:{result}</h2>
         <button onClick={() => setInput(input+'1')}>1</button>
         <button onClick={() => setInput(input+'2')}>2</button>
         <button onClick={() => setInput(input+'3')}>3</button>
         <button onClick={() => setInput(input+'4')}>4</button>
         <button onClick={() => setInput(input+'5')}>5</button><br/>
         <button onClick={() => setInput(input+'6')}>6</button>
         <button onClick={() => setInput(input+'7')}>7</button>
         <button onClick={() => setInput(input+'8')}>8</button>
        
         <button onClick={() => setInput(input+'9')}>9</button>
          <button onClick={() => setInput(input+'10')}>10</button><br/>
          <button onClick={() => setInput(input+'+')}>+</button>
          <button onClick={() => setInput(input+'-')}>-</button>
          <button onClick={() => setInput(input+'%')}>%</button>
          <button onClick={() => setInput(input+'*')}>*</button>
          <button onClick={() => setInput(input+'/')}>/</button>
           
        
      </center>
    </div>
  )
}

export default App
