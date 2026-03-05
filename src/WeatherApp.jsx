import SearchBox from './SearchBox'; 
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){ 
    const [weatherInfo, setWeatherInfo] = useState({
            city: "Wonderland",
            feelslike: 32,
            humidity: 60,
            temp: 30,
            tempMin: 28,
            tempMax: 35,
            weather: "Clear Sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
           <h2> My Weather App</h2>
           <SearchBox updateInfo={updateInfo} />
           <InfoBox info ={weatherInfo}/>
        </div>
    );
}