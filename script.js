let btn = document.querySelector("#btn");


btnwrk=async()=>{ 
btn.addEventListener("click",async(evt)=>{
evt.preventDefault();
let input = document.querySelector("#input");
let city =input.value;
  let BASE_URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  let apiKey = "&appid=d5d14c532ffb2b0307bad2899dec44db";
  let response = await fetch(BASE_URL+`${apiKey}`);
  let data = await response.json();
  console.log(data);
      //weather--
      let weather = data.weather[0].main;
      let weatherPara = document.querySelector("#feel");
      weatherPara.innerText = weather; 
      //temp part--
      let temp = data.main.temp;
      let tempPara = document.querySelector("#temp");
      tempPara.innerText = `${Math.floor(temp)}°C`
      
      //place part--
      let place = data.name;
      let placePara = document.querySelector("#place");
      placePara.innerText = place;
      
      //feels like--
      let feel = data.main.feels_like;
      let feelPara = document.querySelector("#feelsLike");
      feelPara.innerText = `feels like ${Math.floor(feel)}°C`;
      
      //wind part--
      let wind = data.wind.speed;
      let windPara = document.querySelector(".wind");
      windPara.innerText =`${wind} km/h`;
      
      //humidity part--
      let humidity = data.main.humidity;
      let humidityPara = document.querySelector(".humidity");
      humidityPara.innerText = `${humidity}%`;
      
      //pressure--
      let pressure = data.main.pressure;
      let pressurePara =  document.querySelector(".pressure");
      pressurePara.innerText = `${pressure} mb`
      
      //logics------
      if(weather == "Mist"){
        let body = document.querySelector(".container");
        body.style.background ="linear-gradient(160deg ,lightblue,white)"; 
        console.log(weather);
      }
      else if(weather == "Haze"){
        let body = document.querySelector(".container");
        body.style.background ="linear-gradient(160deg ,lightgreen,white)"; 
        console.log(weather);
      }
      else if(weather == "Clouds"){
        let body = document.querySelector(".container");
        body.style.background ="linear-gradient(160deg ,white, lightgray)"; 
        console.log(weather);
      }
      else if(weather == "Clear"){
        let body = document.querySelector(".container");
        body.style.background ="linear-gradient(160deg ,blue,lightblue)"; 
        console.log(weather);
      }
  

});
}
btnwrk();


