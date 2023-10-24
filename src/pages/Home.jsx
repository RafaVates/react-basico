import { useEffect, useState } from 'react'
import MovieCards from "../components/Cards";


const apiKey = 'd0a07e4d80772282c6c32faa9ca005fa'
const URL = "https://api.themoviedb.org/3/discover/movie?api_key="

const Home = () => {

    const [popular, setPopular] = useState([])
    const [horror, setHorror] = useState([])
    const [comedy, setComedy] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        const getPopularMovies = async () => {
          const response = await fetch(`${URL}${apiKey}&sort_by=popularity.desc`)
          const data = await response.json()
          setPopular(data.results.splice(0,6))
        }
        const getHorrorMovies = async () => {
          const response = await fetch(`${URL}${apiKey}&with_genres=27`)
          const data = await response.json()
          setHorror(data.results.splice(0,6))
        }
        const getComedyMovies = async () => {
          const response = await fetch(`${URL}${apiKey}&with_genres=35`)
          const data = await response.json()
          setComedy(data.results.splice(0,6))
        }
        getPopularMovies()
        getHorrorMovies()
        getComedyMovies()
      },[])

      useEffect(()=>{
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
        storedFavorites && setFavorites(storedFavorites)
      },[])

    return ( 
        <>
            <h1>Popular</h1>
            <MovieCards movies={popular} favorites={favorites} setFavorites={setFavorites}/>
            <h1>Horror</h1>
            <MovieCards movies={horror} favorites={favorites} setFavorites={setFavorites}/>
            <h1>Comedy</h1>
            <MovieCards movies={comedy} favorites={favorites} setFavorites={setFavorites}/>
        </>
     );
}
 
export default Home;