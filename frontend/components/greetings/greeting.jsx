import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.currentUser || null;
    let greet;
    if (user) {
      greet = (
        <>
          <h3>Hello {user.username}</h3>
          <button onClick={() => this.props.logoutUser(user)}>Log out</button>
        </>
      )
    } else {
      greet = (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </>
      )
    }
    return (<div>{greet}</div>)
  }
}
export default Greeting;