import React from 'react'

function Navbar() {
  return (
    <section className="navigation">
    <div className="nav-container">
        <div className="brand">
        <a href="#!">Connoisseur</a>
        </div>
        <nav>
        <div className="nav-mobile">
            <a id="nav-toggle" href="#!"><span></span></a>
        </div>
        <ul className="nav-list">
            <li><a href="#!">Search</a></li>
            <li>
            <a href="#!">Categories</a>
            <ul className="nav-dropdown">
                <li><a href="#!">Web Design</a></li>
                <li><a href="#!">Create a new recipe</a></li>
                <li><a href="#!">Login or Sign Up</a></li>
            </ul>
            </li>
            <li><a href="#!">About Us</a></li>
            <li><a href="#!">Contact</a></li>
        </ul>
        </nav>
    </div>
    </section>
  )
}

export default Navbar