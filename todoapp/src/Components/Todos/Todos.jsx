import React, { useState } from 'react'
import Todo from '../Todo/Todo';
import TodoList from '../TodoList/TodoList';


const Todos = () => {
  const [TodosList, setTodoList] = useState([]);
  let addList = (Item) => {
    setTodoList([...TodosList, Item]);
  }
  const deleteListItem = (key) => {
    let newListTodo = [...TodosList]
    newListTodo.splice(key, 1)
    setTodoList([...newListTodo]);

  }
  return (
    <div>
      <Todo addList={addList} />
      
      
      {TodosList.map((listItem, i) => {
        return (
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
        )
      })}

    </div>
  )
}

export default Todos
