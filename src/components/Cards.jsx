import Grid from "@mui/material/Unstable_Grid2";
import CardMovie from "./Card";
import { Orbit } from '@uiball/loaders';
import Container from "@mui/material/Container";

const MovieCards = (props) => {

    const movies = props.movies
    const favorites = props.favorites
    const setFavorites = props.setFavorites

    return ( 
        <Grid container spacing={3}>
            {movies.length >0  ?
                movies.map(movie => (
                    <Grid key={movie.id} xs={4}>
                        <CardMovie  movie={movie} favorites={favorites} setFavorites={setFavorites}/>
                    </Grid> ))
            : <Container sx={{margin:3}}><Orbit size={35} color="#231F20" /></Container>
            }
        </Grid>
     );
}
 
export default MovieCards;