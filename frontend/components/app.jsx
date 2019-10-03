import React from 'react';
import { UnloggedRoute } from '../util/route_util';
import GreetingsContainer from './greetings/greeting_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';

const App = () => {
  return (
    <>
      <UnloggedRoute exact path="/" component={GreetingsContainer} />
      <UnloggedRoute exact path="/login" component={LoginFormContainer} />
      <UnloggedRoute exact path="/signup" component={SignupFormContainer} />
    </>
    );
  };
    
export default App;