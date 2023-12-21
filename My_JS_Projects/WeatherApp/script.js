// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '366663a7bcmsh4f1f0422d727977p11e7e6jsn5fff4baa9777',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };

// let p = fetch(url, options);
// p.then((val) => {
//     return val.json();
// }).then((jsonVal) => {
//     console.log(jsonVal);
//     document.getElementById("temp").innerHTML=jsonVal.temp+"<span>&deg;C</span>";
//     document.getElementById("min_temp").innerHTML=jsonVal.max_temp+"<span>&deg;C</span>";
//     document.getElementById("max_temp").innerHTML=jsonVal.min_temp+"<span>&deg;C</span>";
//     document.getElementById("card_temp").innerHTML=jsonVal.temp+"<span>&deg;C</span>";
//     document.getElementById("card_humidity").innerHTML=jsonVal.humidity+"%";
//     document.getElementById("cloud_pct").innerHTML=jsonVal.cloud_pct;
//     document.getElementById("feels_like").innerHTML=jsonVal.feels_like+"<span>&deg;C</span>";
//     document.getElementById("card_wind").innerHTML=jsonVal.wind_speed+" km/h";
//     document.getElementById("sunrise").innerHTML=jsonVal.sunrise;
//     document.getElementById("sunset").innerHTML=jsonVal.sunset;
// }).catch((err) => {
//     console.log(err);
// });

let fetchWeather = (city = "Delhi") => {

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '366663a7bcmsh4f1f0422d727977p11e7e6jsn5fff4baa9777',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    let p = fetch(url, options);
    p.then((val) => {
        return val.json();
    }).then((jsonVal) => {
        console.log(jsonVal);
        // document.getElementById("temp").innerHTML = jsonVal.temp + "<span>&deg;C</span>";
        document.getElementById("min_temp").innerHTML = jsonVal.min_temp + "<span>&deg;C</span>";
        document.getElementById("max_temp").innerHTML = jsonVal.max_temp + "<span>&deg;C</span>";
        document.getElementById("card_temp").innerHTML = jsonVal.temp + "<span>&deg;C</span>";
        document.getElementById("card_humidity").innerHTML = jsonVal.humidity + "%";
        document.getElementById("cloud_pct").innerHTML = jsonVal.cloud_pct;
        document.getElementById("feels_like").innerHTML = jsonVal.feels_like + "<span>&deg;C</span>";
        document.getElementById("card_wind").innerHTML = jsonVal.wind_speed + " km/h";
        document.getElementById("sunrise").innerHTML = jsonVal.sunrise;
        document.getElementById("sunset").innerHTML = jsonVal.sunset;
    }).catch((err) => {
        console.log(err);
    });
}

document.getElementById("submit").addEventListener('click', (e) => {
    e.preventDefault();
    let searchedCityName = document.getElementById("city_name").value;
    if(searchedCityName!=""){
        document.getElementById("city").innerHTML = searchedCityName;
        fetchWeather(searchedCityName);
    }
    else{
        document.getElementById("city").innerHTML = "Delhi";
        fetchWeather();
    }
});

fetchWeather();

let fetchWeatherOfChennai=()=>{
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '366663a7bcmsh4f1f0422d727977p11e7e6jsn5fff4baa9777',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    let p = fetch(url, options);
    p.then((val) => {
        return val.json();
    }).then((jsonVal) => {
        console.log(jsonVal);
        document.getElementById("chennai-temp").innerHTML = jsonVal.temp + "<span>&deg;C</span>";
        document.getElementById("chennai-min-temp").innerHTML = jsonVal.min_temp + "<span>&deg;C</span>";
        document.getElementById("chennai-max-temp").innerHTML = jsonVal.max_temp + "<span>&deg;C</span>";
        document.getElementById("chennai-humidity").innerHTML = jsonVal.humidity + "%";
        document.getElementById("chennai-cloud-pct").innerHTML = jsonVal.cloud_pct;
        document.getElementById("chennai-feels-like").innerHTML = jsonVal.feels_like + "<span>&deg;C</span>";
        document.getElementById("chennai-wind-speed").innerHTML = jsonVal.wind_speed + " km/h";
        document.getElementById("chennai-wind-degree").innerHTML = jsonVal.wind_degrees + "<span>&deg;</span>";
        document.getElementById("chennai-sunrise").innerHTML = jsonVal.sunrise;
        document.getElementById("chennai-sunset").innerHTML = jsonVal.sunset;
    }).catch((err) => {
        console.log(err);
    });
}

fetchWeatherOfChennai();

let fetchWeatherOfHyderabad=()=>{
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '366663a7bcmsh4f1f0422d727977p11e7e6jsn5fff4baa9777',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    let p = fetch(url, options);
    p.then((val) => {
        return val.json();
    }).then((jsonVal) => {
        console.log(jsonVal);
        document.getElementById("hyderabad-temp").innerHTML = jsonVal.temp + "<span>&deg;C</span>";
        document.getElementById("hyderabad-min-temp").innerHTML = jsonVal.min_temp + "<span>&deg;C</span>";
        document.getElementById("hyderabad-max-temp").innerHTML = jsonVal.max_temp + "<span>&deg;C</span>";
        document.getElementById("hyderabad-humidity").innerHTML = jsonVal.humidity + "%";
        document.getElementById("hyderabad-cloud-pct").innerHTML = jsonVal.cloud_pct;
        document.getElementById("hyderabad-feels-like").innerHTML = jsonVal.feels_like + "<span>&deg;C</span>";
        document.getElementById("hyderabad-wind-speed").innerHTML = jsonVal.wind_speed + " km/h";
        document.getElementById("hyderabad-wind-degree").innerHTML = jsonVal.wind_degrees + "<span>&deg;</span>";
        document.getElementById("hyderabad-sunrise").innerHTML = jsonVal.sunrise;
        document.getElementById("hyderabad-sunset").innerHTML = jsonVal.sunset;
    }).catch((err) => {
        console.log(err);
    });
}

fetchWeatherOfHyderabad();

let fetchWeatherOfAhmedabad=()=>{
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ahmedabad";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '366663a7bcmsh4f1f0422d727977p11e7e6jsn5fff4baa9777',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    let p = fetch(url, options);
    p.then((val) => {
        return val.json();
    }).then((jsonVal) => {
        console.log(jsonVal);
        document.getElementById("ahmedabad-temp").innerHTML = jsonVal.temp + "<span>&deg;C</span>";
        document.getElementById("ahmedabad-min-temp").innerHTML = jsonVal.min_temp + "<span>&deg;C</span>";
        document.getElementById("ahmedabad-max-temp").innerHTML = jsonVal.max_temp + "<span>&deg;C</span>";
        document.getElementById("ahmedabad-humidity").innerHTML = jsonVal.humidity + "%";
        document.getElementById("ahmedabad-cloud-pct").innerHTML = jsonVal.cloud_pct;
        document.getElementById("ahmedabad-feels-like").innerHTML = jsonVal.feels_like + "<span>&deg;C</span>";
        document.getElementById("ahmedabad-wind-speed").innerHTML = jsonVal.wind_speed + " km/h";
        document.getElementById("ahmedabad-wind-degree").innerHTML = jsonVal.wind_degrees + "<span>&deg;</span>";
        document.getElementById("ahmedabad-sunrise").innerHTML = jsonVal.sunrise;
        document.getElementById("ahmedabad-sunset").innerHTML = jsonVal.sunset;
    }).catch((err) => {
        console.log(err);
    });
}

fetchWeatherOfAhmedabad();

let fetchWeatherOfNoida=()=>{
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Noida";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '366663a7bcmsh4f1f0422d727977p11e7e6jsn5fff4baa9777',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    let p = fetch(url, options);
    p.then((val) => {
        return val.json();
    }).then((jsonVal) => {
        console.log(jsonVal);
        document.getElementById("noida-temp").innerHTML = jsonVal.temp + "<span>&deg;C</span>";
        document.getElementById("noida-min-temp").innerHTML = jsonVal.min_temp + "<span>&deg;C</span>";
        document.getElementById("noida-max-temp").innerHTML = jsonVal.max_temp + "<span>&deg;C</span>";
        document.getElementById("noida-humidity").innerHTML = jsonVal.humidity + "%";
        document.getElementById("noida-cloud-pct").innerHTML = jsonVal.cloud_pct;
        document.getElementById("noida-feels-like").innerHTML = jsonVal.feels_like + "<span>&deg;C</span>";
        document.getElementById("noida-wind-speed").innerHTML = jsonVal.wind_speed + " km/h";
        document.getElementById("noida-wind-degree").innerHTML = jsonVal.wind_degrees + "<span>&deg;</span>";
        document.getElementById("noida-sunrise").innerHTML = jsonVal.sunrise;
        document.getElementById("noida-sunset").innerHTML = jsonVal.sunset;
    }).catch((err) => {
        console.log(err);
    });
}

fetchWeatherOfNoida();