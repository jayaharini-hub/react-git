import { Link } from 'react-router-dom';
import React from 'react'
  function Navbar(){
    return (
        <div>
            <nav>
                <Link to="/">Login</Link>
                <Link to="/signup"></Link>
            </nav>
        </div>
    )
  }
  export default Navbar;