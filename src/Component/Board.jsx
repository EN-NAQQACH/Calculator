import React, {useState} from "react";
import Header from "./Header";
export default function Board() {

    const [clickedbtn, setclickedbtn]= useState("");
    const [result, setresult] = useState(0);

    function handlclick(event) {
      const valuebtn = event.target.textContent;
      setclickedbtn(prevValue => prevValue + valuebtn);
    
      // Convert clickedbtn to an array of characters
      const arrayofChars = clickedbtn.split("");
    
      // Filter numbers from the array of characters
      const arrayofnumber = arrayofChars.filter(item => !isNaN(item) && item !== " ");
    
      if (arrayofnumber.length > 14) {
        alert("Can't enter more than 15 numbers");
        setclickedbtn(arrayofnumber.slice(0, 15).join(""));
      }
    }

        function clear(){
          setclickedbtn("");
          setresult(0)
        }
        
        function calculate(){
          setresult(eval(clickedbtn).toString())
        }
  return (
    <>
     <Header valueofbtn={clickedbtn} result={result} />
     <div className="board">
     <div className="row">
        <button onClick={clear}>C</button>
        <button onClick={handlclick}>%</button>
        <button onClick={handlclick}>+/-</button>
        <button onClick={handlclick}>/</button>
      </div>
      <div className="row">
        <button onClick={handlclick}>7</button>
        <button onClick={handlclick}>8</button>
        <button onClick={handlclick}>9</button>
        <button onClick={handlclick}>*</button>
      </div>
      <div className="row">
        <button onClick={handlclick}>4</button>
        <button onClick={handlclick}>5</button>
        <button onClick={handlclick}>6</button>
        <button onClick={handlclick}>-</button>
      </div>
      <div className="row">
        <button onClick={handlclick}>1</button>
        <button onClick={handlclick}>2</button>
        <button onClick={handlclick}>3</button>
        <button onClick={handlclick}>+</button>
      </div>
      <div className="row">
        <button onClick={handlclick}>0</button>
        <button onClick={handlclick}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    
     </div>
    </>
   
  );
}
