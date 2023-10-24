import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Category from '../pages/Category';
import NotFound404 from '../pages/NotFound404';
import Detail from '../pages/Detail';
import Results from '../pages/Results';

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/category/:catId" element={<Category/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/results/:text" element={<Results/>}/>
            <Route path="*" element={<NotFound404/>}/>
        </Routes>
     );
}

export default Router;