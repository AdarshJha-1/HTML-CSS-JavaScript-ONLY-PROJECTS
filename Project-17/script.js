const KEY = '750771baed654fc5a71133732230712';
const input = document.getElementById('search');
const button = document.getElementById('btn');
const main = document.querySelector('.main');
const weatherImg = document.querySelector('#weather-img');
const locationName = document.querySelector('#city_name');
const locationTemp = document.querySelector('#city_temp');

let weather;

const changeWeather = () => {
    if(`${weather['location']['name']}`.length > 13){
        locationName.style.fontSize = "31px";
    }else{
        locationName.style.fontSize = "50px";
        locationName.style.textAlign = "center";
    }
    main.style.height = '540px'
    weatherImg.innerHTML = `<img src="${weather['current']['condition']['icon']}">`
    locationName.innerText = `${weather['location']['name']}`
    locationTemp.innerHTML = `
                            <span id="temp">${weather['current']['temp_c']}</span>
                            <i class="ri-celsius-line"></i>
                            `
}
button.addEventListener('click', () => {
    let PLACE = input.value;
    async function getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${PLACE}&aqi=no`);
        weather = await response.json();
        changeWeather();
    }
    getWeather();
})
