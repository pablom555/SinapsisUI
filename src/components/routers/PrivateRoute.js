import React from 'react';
import {Redirect, Route} from 'react-router';
import {useAuth0} from '@auth0/auth0-react';
import { ThumbnailProvider} from '../../context/ThumbnailContext';

const PrivateRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated} = useAuth0();

  return (
    <Route {...rest}>
      {isAuthenticated ? (
        <ThumbnailProvider>
          <Component />
        </ThumbnailProvider>
      ) : (
        <Redirect to={{pathname: '/login'}} />
      )}
    </Route>
  );
};

export default PrivateRoute;
