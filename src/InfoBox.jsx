import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox( {info} ){ 
    const INIT_URL = "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL ="https://media.istockphoto.com/id/2171008170/photo/young-woman-explores-empty-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=VhCiwT8tAIfPXVaA3o7ksGwpTmZwNKjuJelJfS52J08=";
    const COLD_URL ="https://images.unsplash.com/photo-1701614753266-9ad5ba4f86ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D" ;
    const RAIN_URL ="https://plus.unsplash.com/premium_photo-1687879794744-99e2898cab0d?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;

    return (
        <div className="InfoBox">
       
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ info.humidity > 80 
            ? RAIN_URL 
            : (info.temp > 20 
            ? HOT_URL 
            : COLD_URL) 
        }
        />
        <CardContent>
         <Typography gutterBottom variant="h5" component="div">
          {info.city}{ info.humidity > 80 
            ? <ThunderstormIcon/> 
            : (info.temp > 20 
            ? <SunnyIcon/> 
            : <AcUnitIcon/>)
        }
         </Typography>
         <Typography variant="body2" color="text.secondary" component={"span"}>
          <p> Temperature: {info.temp}°C</p>        
          <p>Humidity: {info.humidity}%</p>
          <p>Min Temp : {info.tempMin}°C</p>
          <p>Max Temp : {info.tempMax}°C</p>
          <p>The weather can be described as <i>{info.weather}</i> and it feels like {info.feelslike}°C</p>
         </Typography>
       </CardContent>
      </Card>
    </div>
</div>
    )
}