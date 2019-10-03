import React from 'react';
import { LoggedRoute, UnloggedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import GreetingsContainer from './greetings/greeting_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import PhotoIndexContainer from './photo_index/photo_index_container';

const App = () => {
  
  return (
    <>
      <UnloggedRoute exact path="/" component={GreetingsContainer} />
      <UnloggedRoute exact path="/login" component={LoginFormContainer} />
      <UnloggedRoute exact path="/signup" component={SignupFormContainer} />
      <LoggedRoute path="/photos" component={PhotoIndexContainer} />
      <LoggedRoute path="/photos/upload" component={PhotoUploadContainer} />
    </>
    );
  };
    
export default App;