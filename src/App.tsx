import React from 'react';
import Footer from './Components/Footer/Footer';
import PrimaryHeader from './Components/Home/PrimaryHeader';
import Navbar from './Components/Navbar/Navbar';
import LoginSignup from './Components/Home/LoginSignup';
import './Scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import NewRecipe from './Components/CreateNewRecipe/NewRecipe'
import Home from './Components/Home/Home'
import About from './Components/About/About'


function App() {
  return (
    <Routes>
      <Route path ='/' element={<Home />} />
      <Route path='/newrecipe' element={<NewRecipe />} />
      <Route path = '/about' element={<About />} />
    </Routes>
  );
}

export default App;
