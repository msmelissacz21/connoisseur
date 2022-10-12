import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function NewRecipe() {

  function handleSubmit(event: any) {
    let name: string = event.target[0].value;

    let hyphenNameID = name.replace(/\s+/g, '-').toLowerCase();

    let content = event.target[2] + "$instructions$" + event.target[3]
    let recipe = {
      id: 'msmelissacz21@gmail.com_'+hyphenNameID,
      userID: 'msmelissacz21@gmail.com',
      name: name,
      image: event.target[1].value,
      content: content
    }

    let body= JSON.stringify(recipe)

    fetch('https://kadmdsrtbiqlrq6v6tpcb4jlsy0ztkju.lambda-url.us-east-2.on.aws/recipes', {
        method: 'POST',
        body: body,
        headers: {
          'Content-type': 'application/json;',
        },
        mode: 'no-cors'
      }).then(
      (res)=>{
        alert(res)
      },
      (err)=>{
        alert(err)
      }
    )

  }


  return (
    <div className='new_recipe_div'>
      <Navbar/>
      <form onSubmit={handleSubmit} className='new_recipe_form'>
        <label className='new_recipe_label'>
          Recipe Name <input type='text' name='name' placeholder='Enter the name of the recipe' className='new_recipe_input' />
        </label>

        <label  className='new_recipe_label'>
          Image Link <input type='text' name='image' placeholder='URL Image Link' className='new_recipe_input'/>
        </label>

        <label className='new_recipe_label'>
          Recipe Description <textarea name='description' rows={6} cols={50} placeholder='Enter a recipe description here' className='new_recipe_input'></textarea>
        </label>

        <label className='new_recipe_label'>
          Recipe Instructions <textarea name='instructions' rows={6} cols={50} placeholder='Enter the recipe instructions here' className='new_recipe_input'></textarea>
        </label>

        <input type='submit' value='Submit' className='new_recipe_submit_button'/>
      </form>
      <Footer/>
    </div>
  )
}

export default NewRecipe