import React, {useState} from "react";

export default function Counter()
{
  let [count,setCount] = useState(0); 

  const Increment = () =>
  {
    return setCount(count+1);
  }
  const Decrement = () =>{
    return setCount(count-1);
  }

  const Reset = () =>{
    return setCount(0);
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