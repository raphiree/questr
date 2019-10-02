import React from 'react';
import { Route } from 'react-router-dom';
import GreetingsContainer from './greetings/greeting_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';

const App = () => {
  return (
    <div>
      <header>
        <h3>[Muwahahahahaha!!]</h3>
        <GreetingsContainer />
      </header>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </div>
    );
  };
    
export default App;