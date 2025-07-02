import React from 'react'

const EmptyState = ( {message, currentFilter}) => {
  const getMessage=()=>{
    if(message) return message

    switch(currentFilter){
      case 'completed':
        return '완료된 할 일 없음'
      case 'incomplete':
        return '진행 중인 할 일 없음'
      default:
        return '할 일이 없습니다. 새로운 할 일 등록하세요'
    }
  }
  return (
    <div className='text-center py-5'>
      <div className='alert alert-info' role='alert'>
        <p className='mb-3'>
          {getMessage()}
        </p>
      </div>
    </div>
  )
}

export default EmptyState
