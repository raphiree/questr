import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        email: "",
        visibility: "visibility",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.togglePasswordField = this.togglePasswordField.bind(this);
  }

  componentDidMount() {
    this.props.clearError();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processSignup(user);
  };

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  };

  guestLogin(e) {
    e.preventDefault();
    const user = { username: 'Guest', password: 'password' };
    this.props.processLogin(user);
  }

  togglePasswordField(e) {
    e.preventDefault();
    let passField = document.getElementsByClassName('pinput');
    if (passField[0].type === "text") {
      passField[0].type = "password";
      this.setState({visibility: "visibility"})
    } else {
      passField[0].type = "text";
      this.setState({visibility: "visibility_off"})
    }
  }

  render() {

    const formType = this.props.formType;

    let errorText;
    if (this.props.errors[0]) {
      errorText = (<div className="errorText"><p>{this.props.errors[0]}</p></div>);
    } else {
      errorText = (<div className="hidden"></div>);
    }

    const formRender = (
        <form onSubmit={this.handleSubmit} id="userForm">
          <img
            src={`${window.dots}`}
            className="dots"
          />
          <h3>Sign up for Questr!</h3>
          {errorText}
          <input className="authinputs"
            type="text"
            onChange={this.update('username')}
            placeholder="Username"
          />
          <input
            className="authinputs"
            type="text"
            onChange={this.update('email')}
            placeholder="E-mail address"
          />
          <div className="password">
            <input
              className="pinput"
              type="password"
              onChange={this.update('password')}
              placeholder="Password"
            />
            <button 
              className="visibility"
              onClick={this.togglePasswordField}>
              <i className="material-icons">{this.state.visibility}</i>
            </button>
          </div>
          <button className="formButton">{formType}</button>
          <button className="guestLogin" onClick={this.guestLogin}>Log in as Guest</button>

          <p className="finePrint">E-mail field is optional. I promise I won't do anything bad with your information.</p>
          <p className="oops">Already a Questr member? <Link to="/login" >Log in here.</Link></p>
        </form>
      )

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

export default SignupForm;