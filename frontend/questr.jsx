import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  
  let store;

  if (window.currentUser) {
    let preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id }
    }
    store = configureStore(preloadedState)
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");

  delete window.currentUser;

  ReactDOM.render(<Root store={store} />, root);
})