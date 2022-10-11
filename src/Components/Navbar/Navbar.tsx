import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Navbar() {
  return (
    <section className="navigation">
            <div className="brand">
            <a href="#!">Connoisseur</a>
            </div>

            <div className='nav-right'>
                <div className="searchBar">
                    <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search"/>
                    {/* <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                    </button> */}
                </div>
                <nav>
                <div className="nav-mobile">
                    <a id="nav-toggle" href="#!"><span></span></a>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="#!">Categories</a>
                        <ul className="nav-dropdown">
                            <li><a href="#!">American</a></li>
                            <li><a href="#!">Italian</a></li>
                            <li><a href="#!">Chinese</a></li>
                            <li><a href="#!">Brazilian</a></li>
                            <li><a href="#!">Seafood</a></li>
                            <li><a href="#!">German</a></li>
                            <li><a href="#!">Desserts</a></li>
                            <li><a href="#!">Healthy</a></li>
                            <li><a href="#!">Breakfast</a></li>
                            <li><a href="#!">Mixed Drinks</a></li>
                            <li><a href="#!">Pet Food</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">Create a new recipe</a></li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
                </nav>
            </div>
            



    </section>
  )
}

export default Navbar