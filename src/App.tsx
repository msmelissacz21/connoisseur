import React from 'react';
import CreateFoodNav from './Components/CreateFoodNav';
import FindFoodNav from './Components/FindFoodNav';
import Footer from './Components/Footer';
import PrimaryHeader from './Components/NotLoggedIn/PrimaryHeader';
import LoginSignup from './Components/NotLoggedIn/LoginSignup';
import Search from './Components/Search';
import './Scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import NewRecipe from './Components/CreateNewRecipe/NewRecipe'
import HomeNotLoggedIn from './Components/NotLoggedIn/HomeNotLoggedIn';


function App() {
  return (
    <Routes>
      <Route path ='/' element={<HomeNotLoggedIn />} />
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
