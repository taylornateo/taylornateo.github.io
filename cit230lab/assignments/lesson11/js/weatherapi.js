const apiURL = "htps://api.openweathermap.org/data/2.5/weather=5604473&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47779" 

fetch(apiURL)
    .then(Response=> Response.json())
    .then(jsObject => {
        console.log(jsObject);

        const curtemp = document.querySelector('#current-temp')
        const iconsource = document.querySelector('#imagesrc')
        const weathericon = document.querySelector('#icon')

        curtemp.innerHTML = jsObject.main.temp;

        iconsource.textContent = 'https:openweathermap.org/img/w/&{jsPbject.weather[0].icon}.png';



        weathericon.setAttribute('src',isrc)

    });