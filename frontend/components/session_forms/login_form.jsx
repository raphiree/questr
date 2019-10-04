import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      visibility: "visibility",
    };
    this.checkUsername = this.checkUsername.bind(this);
    this.signinUser = this.signinUser.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.togglePasswordField = this.togglePasswordField.bind(this);
  }

  componentDidMount() {
    this.props.clearError();
  }

  checkUsername(e) {
    e.preventDefault();
    const username = this.state.username;
    this.props.verifyUser(username);
  };

  signinUser(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processLogin(user);
  };

  guestLogin(e) {
    e.preventDefault();
    const user = { username: 'Guest', password: 'password' };
    this.props.processLogin(user);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  };

  togglePasswordField(e) {
    e.preventDefault();
    let passField = document.getElementsByClassName('pinput');
    if (passField[0].type === "text") {
      passField[0].type = "password";
      this.setState({ visibility: "visibility" })
    } else {
      passField[0].type = "text";
      this.setState({ visibility: "visibility_off" })
    }
  }

  render() {

    let errorText;
    if (this.props.errors[0]) {
      errorText = (<div className="errorText"><p>{this.props.errors[0]}</p></div>);
    } else {
      errorText = (<div className="hidden"></div>);
    }

    const formType = this.props.formType;
    let formRender;
    if (this.props.verified === true) {
      formRender = (
        <form onSubmit={this.signinUser} id="userForm">
          <img
            src={`${window.dots}`}
            className="dots"
            />
          <h3>Log in to Quester!</h3>
            {errorText}
          <input
            className="authinputs"
            type="text"
            onChange={this.update('username')}
            placeholder="Username"
          />
          <div className="password">
            <input
              className="pinput"
              type="password"
              onChange={this.update('password')}
              placeholder="Password"
            />
            <div
              className="visibility"
              onClick={this.togglePasswordField}>
              <i className="material-icons">{this.state.visibility}</i>
            </div>
          </div>
          <button className="formButton" onClick={this.props.clearError}>Log in</button>
          <p className="oops">Not a Questr member? <Link to="/signup" >Sign up here.</Link></p>
        </form>
      )} else {
      formRender = (
        <form onSubmit={this.checkUsername} id="userForm">
        <img 
          src={`${window.dots}`} 
          className="dots"
        />
          <h3>Log in to Quester!</h3>
          {errorText}
          <input
            className="authinputs"
            type="text"
            onChange={this.update('username')}
            placeholder="Username"
          />
          <button className="formButton" onClick={this.props.clearError}>Continue</button>
          <button className="guestLogin" onClick={this.guestLogin}>Log in as Guest</button>
          <p className="oops">Not a Questr member? <Link to="/signup" >Sign up here.</Link></p>
        </form>
      )};

    return (
      <div id="entryForm">
        <div id="formHeader">
          <p id="header-logo">questr</p>
        </div>
        <div id="formRender">
          {formRender}
        </div>
        <div id="formFooter">
          
        </div>
      </div>
    )
  }

}

export default LoginForm;