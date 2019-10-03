import React from 'react';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.currentUser
    console.log(user);
    return (
      <div id="entryForm">
        <div id="formHeader">
          <p id="header-logo">LOGO PLACEHOLDER</p>
        </div>

          <p id="temp">Welcome <br/>
          {user.username}</p>
          <button className="logout" onClick={() => this.props.logoutUser(user)}>Log out</button>

        <div id="formFooter">
          Text
        </div>
      </div>
    )
  }

}

export default PhotoIndex;