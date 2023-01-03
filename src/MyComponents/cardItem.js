import React from 'react';
import Css from '../App.css'

function Design(props){
    return(
    
<div className="card-item">

<h1 className="sno">{props.sno}</h1>
<h1 className="name">{props.name}</h1>
<h1 className="lname">{props.lname}</h1>
    </div>
    )
}

    export default  Design;