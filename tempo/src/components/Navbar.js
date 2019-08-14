import React from "react";
import { useAuth0 } from "../react-auth0";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/user">My Wish List</Link>
      </span>
    )}
    </div>
  );
};

export default NavBar;