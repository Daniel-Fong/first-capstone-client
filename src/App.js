import React from 'react';
import './App.css';
import LandingPage from './routes/LandingPage/LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import UserGamePage from './routes/UserGamePage/UserGamePage'
// import TokenService from './services/token-service'

// import SnapshotContext from './context/SnapshotContext'
import UserWelcomePage from './routes/UserWelcomePage/UserWelcomePage';

class App extends React.Component {
  state = {
    error: null
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage} 
            />
            <Route
              exact
              path={'/login'}
              component={LoginPage}
            />
            <Route
              exact
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              exact
              path={'/dashboard'}
              component={UserWelcomePage}
            />
            <Route
              exact
              path={'/:game_id'}
              component={UserGamePage}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
