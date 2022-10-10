import React from 'react'
import Navbar from '../Navbar/Navbar'
import PrimaryHeader from './PrimaryHeader'
import Footer from '../Footer/Footer'
import RecipeReviewCard from './Card'

function Home() {
  return (
    <div className='container'>
      <Navbar/>
      <PrimaryHeader/>
      <RecipeReviewCard/>
      <Footer/>
    </div>
  )
}

export default Home