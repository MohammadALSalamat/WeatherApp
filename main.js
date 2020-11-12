// fetch the search from to get what user want to insert 

const search = document.querySelector('.search-location');
const cityvalue = document.querySelector('.search-location input');

// change the city name 
const Cityname = document.querySelector('.city-name p');

// change the card body info 
const CardBody = document.querySelector('.card-body');

//change the image of day or night 
const Card_top = document.querySelector('.card-top img');
// calcilate the Weather
const CalculateWeatherDgree = (kalvin) => {
        celcius = Math.round(kalvin - 273.15);
        return celcius;
    }
    // check if the day is night or Morning to change the background
const IsDayTime = (icon) => {
        if (icon.includes('d')) {
            return true;
        } else {
            return false;
        }
    }
    // create a variable to save the collection of API 
UpdateWeatherApp = (city) => {
    // icone src to make the image of day dynmic weather status 
    const ImgSrc = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
        // get the city name and show it to user on App
    Cityname.textContent = city.name;

    // here is another way to show the info of API and show it user
    CardBody.innerHTML = `
            <div class="card-mid row">
            <div class="col-8 text-center temp">
                <span>${CalculateWeatherDgree(city.main.temp)}&deg;C</span>
            </div>
            <div class="col-4 condition-temp">
                <p class="condition">${city.weather[0].description}</p>
                <p class="high">${CalculateWeatherDgree(city.main.temp_max)}&deg;C</p>
                <p class="low">${CalculateWeatherDgree(city.main.temp_min)}&deg;C</p>
            </div>
        </div>
        <div class="icon-container card shadow mx-auto">
            <img src="${ImgSrc}" alt="" srcset="">
        </div>
        <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
                <p>${CalculateWeatherDgree(city.main.feels_like)}&deg;c</p>
                <span>Feels Like</span>
            </div>
            <div class="col text-center">
                <p>${city.main.humidity}%</p>
                <span>Humidity</span>
            </div>
        </div>
`;
    if (IsDayTime(ImgSrc)) {
        Card_top.setAttribute('src', 'img/day_image.svg');
    } else {
        Card_top.setAttribute('src', 'img/night_image.svg');
        Cityname.classList.add('text-white');

    }

}

// add event listner to form

search.addEventListener('submit', (event) => {
    // make the form prevent from sending empty data
    event.preventDefault();

    const searchvalue = cityvalue.value.trim();

    search.reset();

    //get the data from Requist.js to pass the value in 
    RequistCity(searchvalue).then((data) => {
        UpdateWeatherApp(data);
    }).catch((error) => {
        console.log(error);
    });

})