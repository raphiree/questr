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
    this.props.processForm(user);

  };

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  };

  render() {

    const formRender = (<form onSubmit={this.handleSubmit} id="userForm">
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
    </form>)

    return (
      <>
      {formRender}
      </>
    )
  }

}

export default SessionForm;