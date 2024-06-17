import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./infoBox.css";

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1671658221576-8d9a4b04bd8e?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const DUSTY_URL = "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getWeatherImage = () => {
        if (info.humidity > 80) return RAINY_URL;
        if (info.temp > 15) return HOT_URL;
        return COLD_URL;
    };

    const getWeatherIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon />;
        if (info.temp > 15) return <WbSunnyIcon />;
        return <AcUnitIcon />;
    };

    return (
        <div className="info-box">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={getWeatherImage()}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {getWeatherIcon()}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}%</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
