import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Orbit } from '@uiball/loaders';
import { Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';


const apiKey = 'd0a07e4d80772282c6c32faa9ca005fa'
const URL = "https://api.themoviedb.org/3/"

export default function Detail() {


    const {id} = useParams();  
    
    const [detailMovie, setDetailMovie] = useState([]);
    const [imdbID,setImdbID] =useState(0)
    const [isLoading, setisLoading] = useState(true)
    
    useEffect(() => {
        setisLoading(true)
        const getImdbId = async () => {
            const response = await fetch(`${URL}movie/${id}/external_ids?api_key=${apiKey}`)
            const data = await response.json()
            setImdbID(data.imdb_id)      
        }       

        getImdbId()
    }, []);

    useEffect(() => {
        if (imdbID === 0) return
        const getDetailMovie = async () => {
            const getmovie = await fetch(`${URL}find/${imdbID}?api_key=${apiKey}&external_source=imdb_id`)
            const data = await getmovie.json()
            setDetailMovie(data.movie_results[0])
            setisLoading(false)
        }
        getDetailMovie()

    }, [imdbID]);
    
  return (
    <Container sx={{margin:4}}>
        {!isLoading  ? 
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={detailMovie.title}
                    height="140"
                    image={`https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {detailMovie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {detailMovie.overview}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack direction="row" spacing={1}>
                        <Chip label={detailMovie.release_date} avatar={<Avatar>RD</Avatar>} />
                        <Chip label={detailMovie.vote_average} color='error' avatar={<Avatar>Av</Avatar>}/>
                        <Chip label={detailMovie.vote_count}  color="error" avatar={<Avatar>#</Avatar>}/>
                    </Stack>
                </CardActions>
                <Button 
                    component={Link}
                    to={`/`} 
                    variant='contained'
                >
                Back
                </Button>
            </Card>
        :
            <Container sx={{margin:3}}>
                <Orbit size={35} color="#231F20" />
            </Container>}
    </Container>
  );
}