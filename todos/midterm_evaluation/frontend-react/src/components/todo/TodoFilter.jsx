import React from 'react'

function TodoFilter({ currentFilter }) {

  const filters = [
    { id: 'all', label: '전체' },
    { id: 'completed', label: '완료' },
    { id: 'incomplete', label: '미완료' }
  ]

  return (
    <div className='btn-group' role='group' aria-label='Todo Filter'>
      {filters.map(filter => (
        <button
          key={filter.id}
          type='button'
          className={`btn btn-outline-primary ${currentFilter === filter.id ? 'active' : ''}`}>
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter