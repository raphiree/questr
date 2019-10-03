import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Prot = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    }
  />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

export const UnloggedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const LoggedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Prot)
)