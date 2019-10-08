import React from 'react';
import { Link } from 'react-router-dom';

class PhotoStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    }
    debugger
  }

  componentDidMount() {
    this.props.getUser(this.state.id);
    this.props.getUserPhotos(this.state.id);
  }

  render() {
    let user = this.props.currentUser || null;
    let authOptions;

    if (user) {
      authOptions = (
        <nav id="userAuth">
          <button className="signup">Sign Out</button>
        </nav>
      )
    } else {
      authOptions = (
        <nav id="userAuth">
          <Link to="/login"><div className="login">Log In</div></Link>
          <Link to="/signup"><button className="signup">Sign Up</button></Link>
        </nav>
      )  
    }
    
    return (
      <>
        <nav className="user-nav-bar">
          <div className="user-nav-wrapper">
            <Link to="/"><p id="user-nav-logo">questr</p></Link>
            {authOptions}
          </div>
        </nav>
        <div className="user-header-wrapper">
          <p>{this.props.currentUser}</p>
        </div>
        <div className="user-header-bar-wrapper">
          <div className="user-header-bar">
            "User Nav stuff"
          </div>
        </div>
        <div className="user-content-wrapper">
          "Hello There"
        </div>
      </>
    )
  }
}

export default PhotoStream;