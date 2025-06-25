import styled from "styled-components";
import { Container } from "../Container.styles";

export const HomeWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x:hidden;
`

export const BackGroundGradient = styled.div`
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, 
    #764ba2 50%, #f093fb 100%);
    z-index: initial;
`

export const MainContent = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:40px;
  margin-top: 40px;
  margin-bottom: 40px;
  align-items: start;
`

//main left card
export const WeatherSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`

export const ForecastSection = styled(Container)`
  margin-bottom: 40px;
`