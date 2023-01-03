import React, { useState } from "react";
import Css from '../App.css'
import Design from "./cardItem";
import Card from './cards';
function ncard(val){
    return(
<Design sno={val.sno} name={val.name} lname={val.lname}/>
    );
}

function Cards(props){
    var dt = new Date().toLocaleString();

    const [count , setCount] = useState(dt)
    const myff = () => {
        var dtt = new Date().toLocaleTimeString();
    
      setCount(dtt);
    }
    const inter =  setInterval(myff,1000)

    //Value of input tag

return(
    <div className="contcard">
        <h1 className="Title">Family 
        Members</h1><br/>
        <div className="caa">
        {Card.map(ncard)}
        </div>
{/* <Design sno={Card[0].sno} name={Card[0].name} lname={Card[0].lname}/> */}
<div className="time"><h1>{count}</h1></div>


    </div>
)
}
export default Cards;