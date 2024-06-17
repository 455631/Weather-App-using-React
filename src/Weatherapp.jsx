import { useState } from 'react';
import InfoBox from './infobox';
import SearchBox from './searchBox';

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city: "Bangalore",
        feelsLike: 26.31,
        humidity: 67,
        temp: 26.31,
        tempMax: 27.34,
        tempMin: 23.9,
        weather: "broken clouds"
    }
    );

    let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
    }
        return (
            <div style={{textAlign:"center"}}>
                <h2>Weather app made by Sudip</h2>
                 <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
                </div>
        )
}