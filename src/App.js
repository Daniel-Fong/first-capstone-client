import React from 'react';
import './App.css';
import LandingPage from './routes/LandingPage/LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'

import snapshotContext from './context/snapshotContext'

class App extends React.Component {
  state = {
    games: [],
    players: [],
    error: null
  };

  fetchGamesByUserId(userId) {
    return(
      fetch(`http://localhost:8080/api/games/${userId}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject('Error fetching notes from server');
        })
        .catch(err => {
          this.setState({error: err})
        })
      )
    }

  fetchPlayersByGameId(gameId) {
    return(
      fetch(`http://localhost:8080/api/players/${gameId}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject('Error fetching players from server')
        })
        .catch(err => {
          this.setState({error: err})
        })
    )
  } 

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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
