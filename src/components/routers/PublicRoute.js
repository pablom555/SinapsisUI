import React from 'react';
import {Redirect, Route} from 'react-router';
import {useAuth0} from '@auth0/auth0-react';

const PublicRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated} = useAuth0();

  return (
    <Route {...rest}>
      {!isAuthenticated ? <Component /> : <Redirect to="/" />}
    </Route>
  );
};

export default PublicRoute;
