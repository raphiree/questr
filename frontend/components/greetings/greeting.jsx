import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(e) {
    e.preventDefault();
    const user = {username: 'Guest', password: 'password'};
    this.props.processLogin(user);
  }

  render() {
    let user = this.props.currentUser || null;
    let greet;
    if (user) {
      greet = (
        <div id="greeter">
          <p id="header-logo">questr</p>
          <h3>Hello {user.username}</h3>
          <button onClick={() => this.props.logoutUser(user)}>Log out</button>
        </div>
      )
    } else {
      greet = (
        <>
          <nav className="splashHeader">
            <p id="header-logo">questr</p>
            <div id="search">
              <div className="magnifier">
                <i className="material-icons">search</i>
              </div>
            <input id="searchBar" type="text" placeholder="Photos, people, or groups"/>
            </div>
            <nav id="userAuth">
              <Link to="/login"><div id="login">Log In</div></Link>
              <Link to="/signup"><button className="signup">Sign Up</button></Link>
            </nav>
          </nav>

          <div id="splashText">
            <div className="prompt">
              <h1>Press buttons very gently!</h1>
              <h2>They're very delicate right now</h2>
              <Link to="/signup">
                <button className="signup">Sign Up</button>
              </Link>
                <button className="guestLogin" onClick={this.guestLogin}>Log in as Guest</button>
            </div>
          </div>

          <div className="splashFooter">
            <ul>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </>
      )
    }
    return (
      <div id="greeter">
          {greet}
      </div>
      )
  }
}
export default Greeting;