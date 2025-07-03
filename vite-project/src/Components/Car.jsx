 import React, {useEffect} from "react";
import { useState } from "react";
 
 export default function CarInfo()
 {

  let [car,SetCar]= useState({model:2024,name:"Toyota", seat:4});


  function HandleName(e){
     SetCar(c=>({...c, name:e.target.value}));
  };

    function Handelmodel(e){
     SetCar(c=>({...c, model:e.target.value}));
  };
    function HandleSeats(e){
     SetCar(c=>({...c, seat:e.target.value}));
  };

  return(
    <div>
      <input type="text" value={car.name} placeholder="Enter Car Name" onChange={HandleName} /><br/>
      <input type="number" value={car.seat} placeholder="Enter Car Seats" onChange={HandleSeats} /><br/>
      <input type="number" value={car.model} placeholder="Enter Car model" onChange={Handelmodel} /><br/>
      <div>
      <div>Name : {car.name} </div><br />
      <div> Seats : {car.seat} </div><br />
      <div>Model : {car.model} </div><br />
      </div>
    </div>

    )
 }