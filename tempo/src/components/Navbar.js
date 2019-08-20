import React from "react";
import { useAuth0 } from "../react-auth0";
import { BrowserRouter as Router, Link } from "react-router-dom"


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Router>
    <div className = "container">
      <nav className = "navbar nav bar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">tempo</Link>
      <div className = "collapse navbar-collasp">
        <ul className = "navbar-nav mr-auto">
      {!isAuthenticated && (<button onClick={() =>loginWithRedirect({})}>Log in</button>)}
      

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      </ul>
      </div>
      </nav>
    </div>
    </Router>
  );
};

export default NavBar;