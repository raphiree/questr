import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
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
          <input
            type="text"
            onChange={this.update('username')}
            placeholder="Username"
          />
          <input
            type="text"
            onChange={this.update('email')}
            placeholder="E-mail address"
          />
          <input
            type="password"
            onChange={this.update('password')}
            placeholder="Password"
          />
          <button>{formType}</button>
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