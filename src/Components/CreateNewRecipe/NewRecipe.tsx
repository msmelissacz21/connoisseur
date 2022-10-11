import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function NewRecipe() {
  return (
    <div className='new_recipe_div'>
      <Navbar/>
      <form className='new_recipe_form'>
        <label className='new_recipe_label'>
          Recipe Name <input type='text' name='name' placeholder='Enter the recipe' className='new_recipe_input' />
        </label>

        <label  className='new_recipe_label'>
          Image Link <input type='text' name='image' placeholder='URL Image Link' className='new_recipe_input'/>
        </label>

        <input type='submit' value='Submit' className='new_recipe_input'/>
      </form>
      <Footer/>
    </div>
  )
}

export default NewRecipe