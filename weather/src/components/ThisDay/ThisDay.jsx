import React, { useState } from 'react'
import { ThisDayWrapper, Top, Bottom} from './styles'
import CurrentTime from './CurrentTime'

const ThisDay = () => {
 let imageSrc = './images/weatherIcons/';
  const [imgsrc, setImgsrc] = useState(imageSrc + 'rain.svg');

  const [temperature, setTemperature] = useState(21)

  return (
    <ThisDayWrapper>
      <Top>
        <div>
          <h2>{temperature}</h2>
          <h3>Now</h3>
        </div>
        <img src={imgsrc} alt=""/>
      </Top>
      <Bottom>
        <CurrentTime/>
        <div>
          Seoul - KR
        </div>
      </Bottom>
    </ThisDayWrapper>
  )
}

export default ThisDay
