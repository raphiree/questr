import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // TEST CODE START

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // TEST CODE END

  ReactDOM.render(
    <>
      <h1>Muwahahahaha!!!</h1>
      <Root store={store} /> 
    </>, root);
})