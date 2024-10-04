const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2a40a976c7msh7f84eef21eecf72p1997fbjsnf2e09ea9cf03',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    document.getElementById('cityName').innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then((response) => {
            console.log(response);

            document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
            document.getElementById('temp').innerHTML = response.temp;
            document.getElementById('feels_like').innerHTML = response.feels_like;
            document.getElementById('humidity').innerHTML = response.humidity;
            document.getElementById('min_temp').innerHTML = response.min_temp;
            document.getElementById('max_temp').innerHTML = response.max_temp;
            document.getElementById('wind_speed').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
            document.getElementById('sunrise').innerHTML = response.sunrise;
            document.getElementById('sunset').innerHTML = response.sunset;
        })
        .catch(err => {
            console.error('Fetch error: ', err);
            // Handle the error here (e.g., display an error message to the user)
        }); 
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(document.getElementById('city').value);
});

// Initial call for Boston weather
getWeather("Boston");
