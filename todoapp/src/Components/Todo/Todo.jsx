import React, { useState } from 'react'
import './Todo.css'
function Todo(props)  {

    const [Item ,setItem] = useState("")
    



   
  return (
    <div className='container' >
    <h1  className='heading'>Todo App</h1>
    <input className='input' type="text"  value={Item}  placeholder='enter a Item'  onChange={(e) => setItem(e.target.value)}/>
    <button className='btn'  onClick={()=>{props.addList(Item)
    setItem('');
    }}>addItem</button>
 
    </div>
  )
}

export default Todo
