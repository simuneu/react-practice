import React from 'react'

const currentTime = () => {
  const time = new Intl.DateTimeFormat("ko-KR", 
    {
      hour:"numeric", 
      minute:"numeric"
    }
  ).format(
    new Date()
  );
  return (
    <div>{time}</div>
  )
}

export default currentTime
