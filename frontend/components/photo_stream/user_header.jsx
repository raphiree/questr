import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = ({currentUser, logoutUser}) => {
  let authOptions;
  let photostream;
  let user = currentUser;

  if (user !== undefined) {
    authOptions = (
      <nav id="userAuth">
        <Link to="/upload"><i id="icon-cloud" className="material-icons">&#xe2c3;</i></Link>
        <button className="signup-blue"
          onClick={() => logoutUser(user).then(() => this.props.history.push("/"))}>Sign Out</button>
      </nav>
    )
    photostream = (
      <Link to={`/users/${user.id}/photos`} id="white">Your Photostream</Link>
    )
  } else {
    authOptions = (
      <nav id="userAuth">
        <Link to="/upload"><i id="icon-cloud" className="material-icons">&#xe2c3;</i></Link>
        <Link to="/login"><div className="login">Log In</div></Link>
        <Link to="/signup"><button className="signup-blue">Sign Up</button></Link>
      </nav>
    )
  }

  return (

    <nav className="user-nav-bar">
      <div className="user-nav-wrapper">
        <div className="user-nav-left-wrapper">
        <Link to="/"><p id="user-nav-logo">questr</p></Link>
        {photostream}
        </div>
        {authOptions}
      </div>
    </nav>
  )
}

export default UserHeader;