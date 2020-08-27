
import './App.css';
var  OpenWeather = require('./open-weather')

function App() {
 const resp = OpenWeather('5cf0f41ae327c25ad1c2fde64d628ee1', 'London,uk', 'http://api.openweathermap.org/data/2.5/weather')
//const resp = OpenWeather(null, null)
console.log(resp)
  return 'WeatherAPP';
}

 export default App;
