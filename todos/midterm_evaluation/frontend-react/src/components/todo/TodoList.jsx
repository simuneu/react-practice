import React from 'react'
import TodoCard from './TodoCard';

const TodoList = ({todos, currentFilter}) => {
  const getFilteredTodos =()=>{
    switch(currentFilter){
      case 'completed':
        return todos.filter(todo =>todo.isCompleted)
      case 'incomplete':
        return todos.filter(todo =>!todo.isCompleted)
        default:
          return todos;
    }
  }

  const FilteredTodos = getFilteredTodos();

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      {FilteredTodos.map(todo=>(
        <div key={todo.id} className='col'>
          <TodoCard
            todo={todo}
          />

        </div>
      ))
        
      }
    </div>
  )
}

export default TodoList
