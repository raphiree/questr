import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.currentUser
    return (
      <div id="entryForm">
        <div id="formHeader">
          <p id="header-logo">questr</p>
        </div>

          <p id="temp">Welcome <br/>
          {user.username}</p>
          <button className="logout" onClick={() => this.props.logoutUser(user)}>Log out</button>

          <Link to="upload"><button className="logout">Photo Upload</button></Link>

        <div id="formFooter">
          Other
        </div>
      </div>
    )
  }

}

export default PhotoIndex;