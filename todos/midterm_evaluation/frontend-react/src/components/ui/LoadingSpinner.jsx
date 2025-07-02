import React from 'react'

const LoadingSpinner = ({
  message="loading ...", 
  size="spinner-border-sm",
  
}) => {
  return (
    <div className='text-center py-5'>
      <div className={`spinner-border ${size} text-primary m-2`} role='status'>
        <span className='visually-hidden'>
          Loading...
        </span>
        <span className='text-muted'>
          {message}
        </span>
      </div>      
    </div>
  )
}

export default LoadingSpinner
