import React from 'react'
import TodoFilter from '../todo/TodoFilter'

const TodoAction = ({onAddClick, currentFilter, onFilterChange}) => {
  return (
     <div className="d-flex gap-2">
      <button
        type="button"
        className="btn btn-success"
        onClick={onAddClick}
      >
        할 일 추가
      </button>

      {/* TodoFilter에서 props를 받음 */}
      <TodoFilter currentFilter={currentFilter}
      onFilterChange={onFilterChange}
      />
    </div>
  )
}

export default TodoAction
