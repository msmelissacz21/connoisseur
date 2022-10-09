import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function NewRecipe() {
  return (
    <div>
      <Navbar/>
      <form>
        <label className='new_recipe_label'>
          Recipe Name <input type='text' name='name' placeholder='Enter the recipe' className='new_recipe_input' />
        </label>
        <input type='submit' value='Submit' className='new_recipe_input'/>
        <label  className='new_recipe_label'>
          Image Link <input type='text' name='image' placeholder='Paste a link to the recipe image' className='new_recipe_input'/>
        </label>
        <input type='submit' value='Submit' className='new_recipe_input' />
      </form>
    </div>
  )
}

export default NewRecipe