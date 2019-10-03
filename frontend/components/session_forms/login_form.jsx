import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.checkUsername = this.checkUsername.bind(this);
    this.signinUser = this.signinUser.bind(this);
    console.log(props.errors);
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

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  };

  render() {

    const formType = this.props.formType;
    let formRender;
    if (this.props.verified === true) {
      formRender = (
        <form onSubmit={this.signinUser} id="userForm">
          <h3>Log in to Quester!</h3>
          <input
            type="text"
            onChange={this.update('username')}
            placeholder="Username"
          />
          <input
            type="password"
            onChange={this.update('password')}
            placeholder="Password"
          />
          <button>{formType}</button>
          <p className="oops">Not a Questr member? <Link to="/signup" >Sign up here.</Link></p>
        </form>
      )} else {
      formRender = (
        <form onSubmit={this.checkUsername} id="userForm">
          <h3>Log in to Quester!</h3>
          <input
            type="text"
            onChange={this.update('username')}
            placeholder="Username"
          />
          <button>Continue</button>
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