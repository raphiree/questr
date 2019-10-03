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

  // TEST CODE START

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // TEST CODE END

  ReactDOM.render(<Root store={store} />, root);
})