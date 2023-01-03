import React from 'react'
import Todo from './Todo';
export default function Todoitem(props) {
  return (
    <> <div className="itemm">
        <i onClick={() => {
        props.onSelect(props.id)}} className='fa fa-close mx-1 text-left'></i><li>{props.text}</li>
    </div>
        </>
  )
}
