const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=19c7fdf3c5ac29b4e8259e9e5e4e7e9e&units=metric';

//key: 19c7fdf3c5ac29b4e8259e9e5e4e7e9e

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod === '404'){
        throw new Error(res.data.message);
      }else{
        return {temp: res.data.main.temp, location: res.data.name};
      }
    }, function(res){
      debugger;
      throw new Error(res);
    });
  }
}
