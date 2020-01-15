import React from 'react';
import { Link } from 'react-router-dom';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
    }
  }

  componentDidUpdate() {
    if (this.props.currentUser === undefined && this.state.currentUser !== undefined) {
      let newState = this.state;
      newState.currentUser = undefined;
      this.setState(newState);
    }
  }

  render() {
    let authOptions;
    let photostream;
    if (this.state.currentUser !== undefined) {
      authOptions = (
        <nav id="userAuth">
          <Link to="/upload"><i id="icon-cloud" className="material-icons">&#xe2c3;</i></Link>
          <button className="signup-blue"
            onClick={() =>
              this.props.logoutUser(this.state.currentUser)
              }>Sign Out</button>
        </nav>
      )
      photostream = (
        <Link to={`/users/${this.state.currentUser.id}/photos`} id="white">Your Photostream</Link>
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
}

export default UserHeader;