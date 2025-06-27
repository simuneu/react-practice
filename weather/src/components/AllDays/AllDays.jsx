import React from 'react'
import { AllDaysWrapper } from './styles'
import Day from './Day'
import { useWeatherForecast } from '../../utils/useWeatherForecast'

const AllDays = () => {
  const {days, isLoading} = useWeatherForecast("Seoul")
  console.log(days)
  return (
    <AllDaysWrapper>
      {days.map((day)=>(
        <Day key={day.date} day={day}/> 
      ))}
    </AllDaysWrapper>
  )
}

export default AllDays
