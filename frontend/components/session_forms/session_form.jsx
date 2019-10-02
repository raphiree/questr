import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    console.log(user);
    this.props.processForm(user);
  };

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  };

  render() {

    const header = this.props.formType;

    return (
      <form onSubmit={this.handleSubmit}>
        {header}
        <input
          type="text"
          onChange={this.update('username')}
          />
        <input
          type="password"
          onChange={this.update('password')}
          />
        <input
          type="submit"
          />
      </form>
    )
  }

}

export default SessionForm;