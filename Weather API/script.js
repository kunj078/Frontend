const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95079901b0mshc0806396736ce8cp18d6aejsn3c1122dca54b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		// sunset.innerHTML = response.suset
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
	})
	.catch(err => console.error(err))
}

submit.addEventListener("click",(e)=>{
	e.preventDefault(); 
	getWeather(city.value);
})
// city = [Rajkot,Amreli,Vadodara,Valsad,Navsari,Bhavnagar]
const getAnotherWeather = (city) => {
	// cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		// m_cloud_pct.innerHTML = response.m_cloud_pct
		m_temp.innerHTML = response.m_temp
		m_feels_like.innerHTML = response.m_feels_like
		m_humidity.innerHTML = response.m_humidity
		m_min_temp.innerHTML = response.m_min_temp
		m_max_temp.innerHTML = response.m_max_temp
		m_wind_speed.innerHTML = response.m_wind_speed
		m_wind_degrees.innerHTML = response.m_wind_degrees
		m_sunrise.innerHTML = response.m_sunrise
	})
}
// 	.catch(err => console.error(err))
// }

getAnotherWeather(Mumbai);
getAnotherWeather(Kolkata)
getAnotherWeather(Delhi)
getAnotherWeather(Chennai)
getAnotherWeather(Ahmedabad)
getAnotherWeather(Banglore)