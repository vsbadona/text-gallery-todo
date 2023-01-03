
import React from 'react'
import { useState } from 'react'

export default function Actn() {
  const [src , setsrc] = useState("")
  const [link , setlink] = useState("")
  const [image , setimage] = useState([])
  const [count  ,setCount ] = useState(0)
var lz = `0${count}`
 var handleChangeSrc = (event) => {
   setsrc(event.target.value)
  }
  var handleChangeLink = (event) => {
    setlink(event.target.value)
 }
 var handleClick = (event) => {
  setCount(count + 1)
  if(count<10){
    setCount(`0${count}`)
  }
console.log(count)

   setimage([...image , {src:src , link:link}])
   setsrc("")
   setlink("")
  }
  console.log(image)
  return (
    <div>
      <input type="text" name="src"  placeholder='Enter Your Detail' onChange={handleChangeSrc} value={src} />
      <input type="text" name="link" placeholder='Enter Your Detail' onChange={handleChangeLink}  value={link} />
      <button onClick={handleClick}>Add Data To Server</button>
<ul>
  {image.map( (x,i) => (
<>
<h1>{x.src}</h1>
<h2>{x.link}</h2>
</>
  ))}
</ul>
    </div>
  )
}


// import React from 'react'
// import Add from './add'
// var count = 0
// var vip = 0
// var adddta = () => {
//     count = count + 1;
// if(count < 10){
//     vip = `0${count}`
// }else{
//     vip = `${count}`
// }
//     console.log(count)
//     console.log(vip)

// }
// export default function Actn() {
//   return (
//     <div>
//     <Add vip={vip}/>
//         <button onClick={adddta}>Have a Nice day</button>
//     </div>
//   )
// }

//Navbar-------------------------------------------------

{/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
<div className="container-fluid">
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Cards">Cards</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Imgsr">Images</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Todo">List</Link>
      </li>

      <div className="form-check form-switch ">
        <input className="form-check-input my-4 " type="checkbox" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
        <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'} my-4 mx-3`} htmlFor="flexSwitchCheckChecked">{props.text} dark mode</label>
      </div>
    </ul>
  </div>
</div>
</nav> */}