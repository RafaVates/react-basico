import { useEffect, useState } from 'react'
import MovieCards from "../components/Cards";
import { useParams } from 'react-router-dom';


const apiKey = 'd0a07e4d80772282c6c32faa9ca005fa'
const URL = "https://api.themoviedb.org/3/discover/movie?api_key="


const Category = () => {
    const [movies, setMovies] = useState([])
    const [favorites, setFavorites] = useState([])
    const {catId} = useParams()

    useEffect(()=>{
        const getCategoriesMovies = async () => {
            const response = await fetch(`${URL}${apiKey}&with_genres=${catId}`)
            const data = await response.json()
            setMovies(data.results)
          }
        getCategoriesMovies()
      },[catId])

    useEffect(()=>{
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
      storedFavorites && setFavorites(storedFavorites)
    },[])

    return ( 
        <>
            <h1>Selected for you</h1>
            <MovieCards movies={movies} favorites={favorites} setFavorites={setFavorites}/>
        </>
     );
}
 
export default Category;