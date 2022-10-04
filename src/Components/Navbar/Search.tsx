import React from 'react'

function Search() {
  return (
    <form className='input'>
        <input type='input' placeholder='Search for food' className='input__box'/>
        <button className='input_submit' type='submit'>
            Go
        </button>
    </form>
  )
}

export default Search