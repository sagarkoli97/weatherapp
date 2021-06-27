//"api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const apiname="https://api.openweathermap.org/data/2.5/weather";
const apikey="e25c412870b6f9dc5a92fdcf665369d2";

const city=document.getElementById("city");
const temp=document.getElementById("tem");
const input=document.getElementById("input");
const btn = document.getElementById("btn");
const weathertype= document.getElementById("weathertype");
const weatherbody=document.querySelector(".weatherbody");
const minmax=document.getElementById("minmax");
const emptymess=document.getElementById("emptymess");




    

    const fetchdata=()=>{
        if(input.value==""){
            emptymess.innerText="please enter your city name";
        }
        else{
            emptymess.style.display="none";
            weatherbody.style.display="block";

        }
       

     
        
        fetch(`${apiname}?q=${input.value}&appid=${apikey}&units=metric`).then((data)=>{
            const originaldata= data.json();
           originaldata.then((actualdata)=>{
               console.log(actualdata);
             city.innerText=`${actualdata.name},${actualdata.sys.country}`;
             temp.innerHTML=`${Math.floor(actualdata.main.temp)}&deg;C`;
             weathertype.innerText=`${actualdata.weather[0].main}`;
             minmax.innerHTML=`${Math.ceil(actualdata.main.temp_max)}&deg;C( max ) / ${Math.floor(actualdata.main.temp_min)}&deg;C( min )`;
            if(weathertype.textContent=="Haze"){
                document.body.style.backgroundImage="url('haze.jpg')";
            }else if(weathertype.textContent=="Clouds"){
             document.body.style.backgroundImage="url('cloud.jpg')";
         } else if(weathertype.textContent=="Rain"){
             document.body.style.backgroundImage="url('rain.jpg')";
         }else if(weathertype.textContent=="Clear"){
             document.body.style.backgroundImage="url('sunny.jpg')";
         }
           })
          
         
          
         })
       }
       
        
    btn.addEventListener("click",fetchdata)
   






