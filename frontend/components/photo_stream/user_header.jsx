import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';

const UserHeader = (currentUser) => {
  let authOptions;
  let user = currentUser;

  if (user.currentUser !== undefined) {
    authOptions = (
      <nav id="userAuth">
        <button className="signup-blue"
          onClick={() => logoutUser(user)}>Sign Out</button>
      </nav>
    )
  } else {
    authOptions = (
      <nav id="userAuth">
        <Link to="/login"><div className="login">Log In</div></Link>
        <Link to="/signup"><button className="signup-blue">Sign Up</button></Link>
      </nav>
    )
  }

  return (

    <nav className="user-nav-bar">
      <div className="user-nav-wrapper">
        <Link to="/"><p id="user-nav-logo">questr</p></Link>
        {authOptions}
      </div>
    </nav>

  )
}

export default UserHeader;