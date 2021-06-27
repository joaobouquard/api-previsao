// Referencias do DOM
const city = document.getElementById('city');
const btnConsultar = document.getElementById('btnConsultar');

const imgTempo = document.getElementById('imgTempo');
const pTemp = document.getElementById('pTemp');


//Lógica da Aplicação

import apiTempo from '../services/api.js';

function consultaTempo(){
    const cidade = city.value;
    apiTempo.get(cidade).then(res=>{
        imgTempo.style.display = 'block';
        
        const { city, temp, date,time, condition_slug } = res.data.results;
        
        displayIcon[condition_slug]();
        pTemp.innerHTML= `
        <h1>Cidade: ${city}</h1>
        <p>
            Temperatura: ${temp} &deg;C <br>
            Data: ${date} <br>
            Hora: ${time} <br>
        </p>
        `
    });
}

const displayIcon ={
    storm:()=>{
        imgTempo.setAttribute('src' ,'../assets/tStorm.png');
     },
    snow:()=>{
        imgTempo.setAttribute('src' ,'../assets/tSnow.png'); 

    },
    hail:()=>{
        imgTempo.setAttribute('src' ,'../assets/tHail.png');
     },

    rain:()=>{
        imgTempo.setAttribute('src' ,'../assets/tRain.png');
     },

    fog:()=>{
        imgTempo.setAttribute('src' ,'../assets/tFog.png');
     },

    clear_day:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tClearDay.png');
    },

    clear_night:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tClearNight.png');
    },

    cloud:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tCloud.png');
    },
        
    cloudly_day:()=>{
        imgTempo.setAttribute('src' ,'../assets/tCloudDay.png');
     },
    cloudly_night:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tCloudNight.png');
    },
        
    none_day:()=>{ },

    none_night:()=>{ },
}

btnConsultar.onclick = ()=>{
    consultaTempo();
};