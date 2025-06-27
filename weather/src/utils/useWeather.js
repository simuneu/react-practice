import openWeather from "./openWeather";
import {useQuery} from '@tanstack/react-query'

export const getWeather = (city="Seoul")=>{
  const weather = openWeather.getCurrentWeatherByCityName({
    cityName : city,
    countryCode:"KR",
    units:"metric",
  });
  return weather;
}

const useWeather = (city="Seoul")=>{
  //캐시 및 refetch기준 키
  const {data, ...rest} = useQuery({
    queryKey:["weather", city],
    //데이터 가져올 비동기 함수
    queryFn:()=>getWeather(city),
    //데이터를 상태로 유지할 시간 (ms)
    // staleTime:1000*60*5
  })

  return{
    ...rest, 
    data
  }
}

export default useWeather;