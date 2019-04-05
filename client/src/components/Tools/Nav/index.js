import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to='/main' className="nav-link">Main</Link>
          </li>
          <li className="nav-item">
            <a
              onClick={props.logout}
              href="#"
              className="nav-link "
            >Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;