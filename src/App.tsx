import React from 'react';
import FindFoodNav from './Components/FindFoodNav';
import Footer from './Components/Footer';
import LoginSignup from './Components/LoginSignup';
import Search from './Components/Search';
import './Scss/style.scss';


function App() {
  return (
    <div>
      <h1>
        Connoisseur
      </h1>
      <Search/>
      <LoginSignup/>
      <FindFoodNav/>
      <Footer/>
    </div>
  );
}

export default App;
