import React, { useState } from 'react'
import Todoitem from './Todoitem'

export default function Todo(props) {
    const [items , setitems] = useState("")
    const [Listitem , setListitem] = useState([])
    var item = (event) => {
    setitems(event.target.value)
    }
    var addlist = () => {
        if(items.length!==0){
        setListitem( (oldval) => {
            return [...oldval , items]
        })
        setitems('')}
    };
    var deletedItems = (id) => {
   setListitem((oldval) => {
    return oldval.filter((arrElm , index) => {
            return index != id;
        });
    
   });
   return {

   }
    }
  return (
   <div className="container text-center w-25 p-3">
    <div className="todocard border border-danger rounded-top">
        <div className="navv">
             <h1>My TODO List</h1>
        <br/>
        <div className="list">
            <input type="text" placeholder='Add an Item'value={items} onChange={item}/>
        <button className='btn btn-primary btn-circle btn-xl' onClick={addlist}>+</button><br/>
        </div>
        </div>
       
       <br/> <ol className='overflow-scroll listt' style={{textAlign:'left !Important'}}>
      {  Listitem.map( (itemval , index) => {
return  <Todoitem
text = {itemval}
key = {index}
id = {index}
onSelect = {deletedItems}
/>
        })}
                     
 </ol>
        
    </div>
   </div>
  )
}
