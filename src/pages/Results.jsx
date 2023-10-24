import { useParams } from "react-router-dom";
import React,{useState, useEffect} from 'react'
import MovieCards from "../components/Cards";
import { Typography } from "@mui/material";


const apiKey = 'd0a07e4d80772282c6c32faa9ca005fa'
const URL = "https://api.themoviedb.org/3/search/movie?api_key="

const Results = () => {

    const {text} = useParams()
    const [movies, setMovies] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        const getCategoriesMovies = async () => {
            const response = await fetch(`${URL}${apiKey}&query=${text}`)
            const data = await response.json()
            setMovies(data.results)
          }  
        getCategoriesMovies()
          
      },[text])

    useEffect(()=>{
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
      storedFavorites && setFavorites(storedFavorites)
    },[])

    return ( 
        <>
            <h1>Search Results ...</h1>
            {movies.length>0 ? 
                <MovieCards movies={movies} favorites={favorites} setFavorites={setFavorites}/>
            : 
                <Typography variant="subtitle1"> 
                    There are no movies including: <b>{text}</b> . Try another search
                </Typography>
            }
        </>
     );
}
 
export default Results;


//   const getPopularMovies = async () => {
        //     const response = await fetch(`${URL}${apiKey}&query=${buscar}`)
        //     const data = await response.json()
        //   }
        //   getPopularMovies()
        // }