import { useEffect, useState } from 'react';
import MovieCards from '../components/Cards';
import { Typography } from '@mui/material';

const apiKey = 'd0a07e4d80772282c6c32faa9ca005fa'
const URL = "https://api.themoviedb.org/3/"

function Favorites() {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [imdbID,setImdbID] =useState([])
    
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        storedFavorites && setFavorites(storedFavorites)
        if (storedFavorites.length > 0) {
            Promise.all(
                storedFavorites.map((id) =>
                    fetch(`${URL}movie/${id}/external_ids?api_key=${apiKey}`).then((res) => res.json())
                )
            )
                .then((data) => setImdbID(data.map((response) => response.imdb_id)))
                .catch((error) => console.error(error));        
                
            Promise.all(
                imdbID.map((ext_id) =>
                    fetch(`${URL}find/${ext_id}?api_key=${apiKey}&external_source=imdb_id`).then((res) => res.json())
                )
            )
                .then((data) => setFavoriteMovies(data.map((response) => response.movie_results[0])))
                .catch((error) => console.error(error));
            }
    }, [imdbID]);


    
    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter((movieId) => movieId !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavoriteDrinks(favoriteDrinks.filter((movie) => movie.id !== id));
    };

    return (
        <div>
            <h1>My favorites Movies</h1>
            {favorites.length > 0 ? (
                <MovieCards movies={favoriteMovies} favorites={favorites} setFavorites={setFavorites}/>
            ) : (
            <Typography variant="subtitle1"> 
                No hay peliculas favoritas. Agrega algunas!
            </Typography>
            )}
        </div>
    );
}

export default Favorites;
