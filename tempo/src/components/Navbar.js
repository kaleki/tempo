import React from "react";
import { useAuth0 } from "../react-auth0";
import './Navbar.css';




const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    
    <div className = "container">
     
      {!isAuthenticated && (<button onClick={() =>loginWithRedirect({})}>Log in</button>)}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {/* <Router>
          <div className="container">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">tempo</Link>
              <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/mywish/:id" className="nav-link">My Wish List</Link>
                  </li>
                </ul>
              </div>
            </nav>
  
            
            <Route path="/mywish" component={AddChore} />
          </div>
        </Router> */}
  </div>

    

    
  );
};

export default NavBar;