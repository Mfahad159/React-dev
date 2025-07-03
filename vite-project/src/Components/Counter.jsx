import React, {useState} from "react";

export default function Counter()
{
  let [count,setCount] = useState(0); 

  const Increment = () =>
  {
    setCount(count+1);
  }
  const Decrement = () =>{
    setCount(count-1);
  }

  const Reset = () =>{
    setCount(0);
  }


  return(<div className="Main-container">
     
     <div className="Digit">{count}</div>
     <div className="all-buttons">
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Increment}>+</button>
     </div>


  </div>)
}