import React, { useState, useEffect } from 'react';
import styles from "../../public/components/layout.module.css"
import Layout from '../../public/components/layout';
import { useRouter } from 'next/router';

function getDate(){
  var date = new Date(); 
  var datechanged = date.toDateString(); 
  return datechanged; 
}

function getTime(){ 
  var time = new Date(); 
  var timechanged = time.getTime(); 
  return timechanged; 
}
/*function afficherImage() {
  var img = document.createElement('img');
  img.setAttribute('src', 'C:\Users\etara\OneDrive\Pictures\cste.png');
  document.body.appendChild(img);
}*/



function pagedaccueil() {
  function reMes(event){ 
    event.preventDefault(); 
    router.push('/Ecrans/Messages'); 
  }

  function reBuild(event){
    event.preventDefault(); 
    router.push('/Ecrans/Buildings');
  } 

  function reForecast(event){ 
    event.preventDefault(); 
    router.push('/Ecrans/Forecast');
  }

  /*const apiKey = 'f8565b1ce7494bc8524767d08ce6edeb';
  const cityName = 'Ottawa';

  const url = `https://api.weatherstack.com/current?access_key=f8565b1ce7494bc8524767d08ce6edeb&query=Ottawa`;

  document.addEventListener('DOMContentLoaded', function() {
    afficherImage();

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temp = data.current.temperature;
        const description = data.current.weather_descriptions[0];
        const icon = data.current.weather_icons[0];

        const weatherDiv = document.createElement('div');
        const tempDiv = document.createElement('div');
        const descDiv = document.createElement('div');
        const iconImg = document.createElement('img');

        tempDiv.innerHTML = `Temperature: ${temp} K`;
        descDiv.innerHTML = `Description: ${description}`;
        iconImg.src = icon;

        weatherDiv.appendChild(tempDiv);
        weatherDiv.appendChild(descDiv);
        weatherDiv.appendChild(iconImg);

        document.body.appendChild(weatherDiv);
      })
      .catch(error => {
        console.log(error);
      });
  });

  function handleClick() {
    console.log('Le bouton a été cliqué!');
    // Ajouter ici l'action souhaitée lorsque le bouton est cliqué
  }*/
  const[data,setData] = useState([]); 
  const [isLoading,setLoading] = useState(true); 
  const [val,setVal] = useState(''); 
  const router = useRouter(); 
  const thedata = async() => { 
    try{ 
      const response = await fetch('http://api.weatherapi.com/v1/current.json?key=82af15e275c24e949ed212814232202&q=Ottawa&aqi=no');
      const json = await response.json();
      setData(json.current);
     }
      catch(error){ 
        console.error(error);
    }
    
    finally{ 
      setLoading(false);
    }
    
    };

    
  useEffect(()=>{
  thedata();
  },[]);

  if(isLoading){ 
    return <h1>Loading Please Wait</h1>
  }

  return (
    <>
    <Layout>
      <html className={styles.bg}>
     <header className={styles.navbar}>
    <img src = "https://mma.prnewswire.com/media/1252012/Soci_t__canadienne_d_hypoth_ques_et_de_logement_Le_plus_grand_in.jpg?p=facebook" className={styles.logo}></img> 
        <nav>
        <ul className={styles.ulists}>
    <li className={styles.lists}><a href = "http://lco.ca">LCO.ca</a></li>
    <li className={styles.lists}><a>Contact</a></li>
    </ul>
</nav>
</header>
<body>
<h1 className={styles.header}> Bienvenue ...</h1>
<div style={{marginBottom:150,position:"relative",display:"grid",justifyContent:"center"}}>
<div>
<h2 id = "currentdate" className={styles.grid}> 
<time dateTime={getDate}>
{getDate()}
</time>

</h2>

</div>

<div className={styles.imagestyles}>
  <img src={data.condition.icon}  style={{height:100,bottom:10,right:15,position:"relative"}}></img>
  
<h2 style={{right:10,position:"relative"}}> 
  {data.temp_c}°C, {data.condition.text}
</h2>
</div>
</div>

    <form method = "post">
      <div style={{position:"relative",bottom: 160}}>
        <button type="submit" id="ForecastPage" className={styles.weatherbutton} style={{bottom:10,left:150}} onClick={reForecast}>
          <h2 className={styles.buttontext}>Check Forecast</h2>
        </button>
      <div className={styles.divsbuttons}>
      <button type='submit' id='Messages' className={styles.button} style={{padding:60,}} onClick={reMes}>
        <img src="../Images/Messageimgnobg.png" className={styles.buttonimages} style={{left:18}}></img>
        <h2 className={styles.buttontext}>Messages</h2>
        </button>
        </div>
      
      <div className={styles.divsbuttons}>
        <button type="submit" id = "ChooseBuilding" className={styles.button} style = {{padding:60}} onClick={reBuild}> 
        <img src="../Images/LCOGestblessbuild.png" className={styles.buttonimages} style={{left:45}}></img>
        <h2 className={styles.buttontext}>Choose a building</h2>
        </button>
      </div>
      </div>
          
    </form>

<div className={styles.langdiv} style={{bottom:130,right:5}}>
    <select name="langages" id="select-lang" className={styles.optionbox} >
      <option value = "English">
        EN 
        </option> 
        <option value = "French"> 
        FR
        </option>

    </select>
    </div>
    
    </body>
    </html>
    </Layout>
    </>
  );
}

export default pagedaccueil;
