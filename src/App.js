import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import HomePage from './pages/HomePage';
import Thumbnails from './pages/Thumbnails';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/routers/PrivateRoute';
import PublicRoute from './components/routers/PublicRoute';
import {Auth0Config} from './auth/Auth0.config';

function App() {
  return (
    <Auth0Provider {...Auth0Config}>
      <Router>
        <Switch>
          <PublicRoute exact path="/login" component={LoginPage} />

          <Route exact path="/signin">
            <Redirect to="/login" />
          </Route>

          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/thumbnails" component={Thumbnails} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </Auth0Provider>
  );
}

export default App;
