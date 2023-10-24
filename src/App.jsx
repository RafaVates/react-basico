import Navbar from './components/Navbar'
import BottomAppBar from './components/Footer'
import Router from './router/Router'
import './App.css'
 
function App() {
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container'> 
        <Router/>
      </main>
      <footer>
        <BottomAppBar/>
      </footer>
    </>
  )
}

export default App
