import React, {useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


export default function CardMovie(props) {

  const movie = props.movie
  const favorites = props.favorites
  const setFavorites = props.setFavorites
  // const[favorites,setFavorites]=useState([])
  const [elegido,setElegido]=useState(false)

  useEffect(()=>{
    favorites.includes(movie.id) && setElegido(true)
  },[])


  const handleFavorite = () => {
    const updateFavorites = favorites.includes(movie.id) 
      ? favorites.filter(fav => fav !== movie.id) 
      : [...favorites, movie.id]
    setFavorites(updateFavorites)
    localStorage.setItem('favorites', JSON.stringify(updateFavorites))  
    
    setElegido(!elegido) 
  }



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {movie.vote_average.toFixed(1)}
          </Avatar>
        }
        title={movie.title}
        subheader={movie.release_date}
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {movie.overview.trim().slice(0, 100) + ' ...'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  onClick={handleFavorite} aria-label="add to favorites">
          <FavoriteIcon sx={{ color: elegido ? red[500] : 'black'}}/>
        </IconButton>
        <Button 
          component={Link}
          to={`/detail/${movie.id}`} 
          variant='contained'
        >
          More info
        </Button>
      </CardActions>
    </Card>
  );
}