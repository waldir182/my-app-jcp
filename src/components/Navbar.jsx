import React, {Fragment} from 'react';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";

const Navbar = ()=>{
  return(
    <Fragment>
      <Router>
        <nav
        className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to='/' className='navbar-brand'>My-app</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className='nav-link' activeClassName="active"
                to='/home'>Tablero</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' activeClassName=''
                to='/curses'>Cursos</Link>
            </li>
          </ul>
        </div>
      </nav>
      </Router>
    </Fragment>
  );
}

export default Navbar;
