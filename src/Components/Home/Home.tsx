import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import PrimaryHeader from './PrimaryHeader'
import Footer from '../Footer/Footer'
import RecipeReviewCard from './Card'

function Home() {
  const [recipes, setRecipes] = useState(null)
  
  let access_token = get_token_on_sign_in()

  if(access_token != '') {
    fetch('https://kadmdsrtbiqlrq6v6tpcb4jlsy0ztkju.lambda-url.us-east-2.on.aws/sign-in-or-sign-up?access_token=' + access_token).then(
      (resp) => {
        resp.json().then(
          (data) => {
            localStorage.setItem('user_id', data.user_id)
          }
        )
      }
    )
  }

  if(recipes == null) {
    fetch('https://kadmdsrtbiqlrq6v6tpcb4jlsy0ztkju.lambda-url.us-east-2.on.aws/all-recipes').then(
      (resp) => {
        resp.json().then(
          (data) => {
            setRecipes(data)
          }
        )
      },
      (err) => {
        console.log(err)
      }
    )
  }

  let recipeCards = []
  if(recipes != null) {
    let i = 0
    for(let r of recipes as any[]){
      recipeCards.push(<RecipeReviewCard key={i} recipe={r}></RecipeReviewCard>)
      i++
    }
  }

  return (
    <div className='container'>
      <Navbar/>
      <PrimaryHeader/>
      <div className='recipe-cards'>
        {recipeCards}
      </div>
      <Footer/>
    </div>
  )
}

function get_token_on_sign_in(): string {
  if(window.location.hash == undefined || window.location.hash == '') {
    return ''
  }
  return window.location.hash.split('access_token=')[1].split('&')[0]
}

export default Home