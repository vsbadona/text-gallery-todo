import React, { useState } from 'react'
export default function Form() {
    const [Detail , setDetail] = useState({
        fname : "",
        lname : "",
        email : "",
        phone : ""
    })

     
    var inpp = (event) => {
        event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;

    setDetail( (preVal) => {
        return{ 
         ...preVal,
     [name] : value,
        }
         });
   }
 
    return (
    <div className="val" >
    <br/>
    <h1>Hello {Detail.fname} {Detail.lname} </h1>
    <h1 style = {{fontSize:'25px',color:'black'}}>{Detail.email}</h1>
    <h1 style = {{fontSize:'25px',color:'black'}}>{Detail.phone}</h1>
    <form onSubmit={inpp}>
<input type="text" onChange={inpp} name="fname" placeholder="Enter Your Name" value={Detail.fname} /><br/><br/>
<input type="text" onChange={inpp} name="lname" placeholder="Enter Your Last Name"  value={Detail.lname}/><br/><br/>
<input type="email" onChange={inpp} name="email" placeholder="Enter Your Email" value={Detail.email}/><br/><br/>
<input type="number" onChange={inpp} name="phone" placeholder="Enter Your Phone" value={Detail.phone}/><br/><br/>
<button type="submit" >Submit</button>
</form>
</div>
  )
}
