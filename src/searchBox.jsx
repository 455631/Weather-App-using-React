import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";

export default function SearchBox({updateInfo}) {
    let [city,setCity]=useState("");
    let [error,seterror]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="648f6c17dc666eab44e649646e0cf083";

    let getWeatherinfo=async()=>{
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse = await response.json();
        console.log(jsonresponse);
        let result={
            city:city,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelsLike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description
        };
        console.log(result);
        return result;
    }catch(err){
       throw err;
    }
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async(evt)=>{
       try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await getWeatherinfo();
        updateInfo(newinfo);
       }catch(err){
        seterror(true);
       }
    }

    return (
     
        <div className="SearchBox">
            <h3>Enter city Name</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="outlined" required  onChange={handleChange}/>
                <br /><br/>
                <Button variant="contained" type="submit">
                    Search
                </Button>
                <br/><br/>
                {error && <p style={{color:"red"}}>No such place found!</p>}
            </form>
        </div>
    );
}
