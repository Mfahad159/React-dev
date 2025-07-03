import React, {useState} from "react";
function Greeting()
{
   let [name,setName] = useState("Nobody");
  const updateName = () =>{
    setName("Mian Fahad");
   }

    return(<div>
            <p>Name is : {name}</p>
            <button onClick={updateName}>Click Me</button>
          </div>);
}

export default Greeting;