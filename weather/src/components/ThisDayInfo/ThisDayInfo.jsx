import React from 'react'
import {ThisDayInfoWrapper, ImgWrapper} from './styles'

const ThisDayInfo = () => {
  return (
    <ThisDayInfoWrapper>
      <div className='info-row'>
        <ImgWrapper>
            <img src="./images/temperature.svg" alt="" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100°</p>
      </div>

      <div className='info-row'>
        <ImgWrapper>
            <img src="./images/temperature.svg" alt="" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100°</p>
      </div>

      <div className='info-row'>
        <ImgWrapper>
            <img src="./images/temperature.svg" alt="" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100°</p>
      </div>

      <div className='info-row'>
        <ImgWrapper>
            <img src="./images/temperature.svg" alt="" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100°</p>
      </div>
    </ThisDayInfoWrapper>
  )
}

export default ThisDayInfo
