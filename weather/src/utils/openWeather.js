import OpenWeather from "openweathermap-ts"

const openWeather = new OpenWeather({
    apiKey:"2f52f467965157c68093c4989b56a81f"
})

openWeather.setUnits("metric")

export default openWeather;
