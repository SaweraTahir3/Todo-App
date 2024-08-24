import React from 'react'

const TodoList = (props) => {
  return (
    <div>
      <li className="list-Item">
        {props.item}

        <span><button onClick={e=>{
            props.deleteItem(props.index)
        }} >Delete</button></span>
      </li>
    </div>
  )
}

export default TodoList
