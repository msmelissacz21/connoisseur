import React from 'react';
import CreateFoodNav from './Components/Home/CreateFoodNav';
import FindFoodNav from './Components/Home/FindFoodNav';
import Footer from './Components/Footer';
import PrimaryHeader from './Components/Home/PrimaryHeader';
import LoginSignup from './Components/Home/LoginSignup';
import Search from './Components/Navbar/Search';
import './Scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import NewRecipe from './Components/CreateNewRecipe/NewRecipe'
import Home from './Components/Home/Home'


function App() {
  return (
    <Routes>
      <Route path ='/' element={<Home />} />
      <Route path='/newrecipe' element={<NewRecipe />} />

      {/* <div className='prim_container'>
        <LoginSignup/>
        <Search/>
        <CreateFoodNav/>
        <PrimaryHeader/>
        <FindFoodNav/>
        <Footer/>
      </div> */}
    </Routes>
  );
}

export default App;
