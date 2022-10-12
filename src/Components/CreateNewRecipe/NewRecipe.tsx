import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function NewRecipe() {

  const handleSubmit = (event: any) =>{
    event.preventDefault()
    let name: string = event.target[0].value;

    let hyphenNameID = name.replace(/\s+/g, '-').toLowerCase();
    let userId = localStorage.getItem('user_id')
    let content = event.target[2].value + "$instructions$" + event.target[3].value
    let recipe = {
      id: userId+'_'+hyphenNameID,
      userID: userId,
      name: name,
      image: event.target[1].value,
      content: content
    }

    let body= JSON.stringify(recipe)
    function send_recipe_data(body: string) {
      fetch('https://kadmdsrtbiqlrq6v6tpcb4jlsy0ztkju.lambda-url.us-east-2.on.aws/recipes', {
        method: 'POST',
        mode:'no-cors',
        credentials: 'include',
        body: body,
      }).then(
        (resp) => {
          console.log(resp)
        }
      )
    }
     send_recipe_data(body) 
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