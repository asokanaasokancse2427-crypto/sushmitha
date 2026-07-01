import logo from './logo.svg';
import React,{useState,useEffect,useMemo,useCallback} from 'react';
import './App.css';

function App() {
  const[typedName,setTypedName]=useState("");
   useEffect(() => {
          alert("welcome Alert");
        },[]);
        const[number,setNumber]=useState(0);
        const calculationResult = useMemo(() =>{
          return number*2;
        },[number]);
        const[message,setMessage]=useState("");
        const showWelcomeMessage=useCallback((msg) =>{
          setMessage(msg);
        },[]);
  return (
    <div className="App">
      <header className="App-header">
        <h2>student name display</h2>
        <input
        type="text"
        placeholder="type your name"
        onChange={(e) => setTypedName(e.target.value)}
        />
        <p>Welcome {typedName}</p>
        <h2>multiply number by 2</h2>
        <p>number: {number}</p>
        <p>Result: {calculationResult}</p>
        <button onClick={() => setNumber(number+1)}>
          Increment
        </button>
        <h2>ShowWelcomeMessage</h2>
        <button onClick={() =>showWelcomeMessage("Welcome Messsage1")}>Button1</button>
        <button onClick={() => showWelcomeMessage("Welcome Message2")}>Button2</button>
        <p>{message}</p>

       
        
      </header>
    </div>
  );
}

export default App;
