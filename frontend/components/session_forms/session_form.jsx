import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  };

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  };

  render() {

    const formType = this.props.formType;
    let formRender;
    if (formType === 'Sign Up') {
      formRender = (
        <form onSubmit={this.handleSubmit} id="userForm">
          <h3>Sign up for Questr!</h3>
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
          <p className="finePrint">E-mail field is optional. I promise I won't do anything bad with your information.</p>
          <p className="oops">Already a Questr member? <Link to="/login" >Log in here.</Link></p>
        </form>
      )
    } else {
      formRender = (
        <form onSubmit={this.handleSubmit} id="userForm">
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
      )
    }

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

export default SessionForm;