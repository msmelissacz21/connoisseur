import React from 'react';
import CreateFoodNav from './Components/CreateFoodNav';
import FindFoodNav from './Components/FindFoodNav';
import Footer from './Components/Footer';
import PrimaryHeader from './Components/Header/PrimaryHeader';
import LoginSignup from './Components/LoginSignup';
import Search from './Components/Search';
import './Scss/style.scss';


function App() {
  return (
    <div className='prim_container'>
      <h1>
        Connoisseur
      </h1>
      <Search/>
      <CreateFoodNav/>
      <PrimaryHeader/>
      <LoginSignup/>
      <FindFoodNav/>
      <Footer/>
    </div>
  );
}

export default App;
