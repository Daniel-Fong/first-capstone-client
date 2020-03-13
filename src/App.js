import React from 'react';
import './App.css';
import LandingPage from './routes/LandingPage/LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import UserGamePage from './routes/UserGamePage/UserGamePage'
import CreateGamePage from './routes/CreateGamePage/CreateGamePage'
import TokenService from './services/token-service'

// import SnapshotContext from './context/SnapshotContext'
import UserWelcomePage from './routes/UserWelcomePage/UserWelcomePage';

class App extends React.Component {
  state = {
    error: null
  };

  handleDeletePlayerById(playerId) {
    return(
      fetch(`http://localhost:8080/api/players/${playerId}`, {
        method: 'DELETE',
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.ok) {
            return Promise.resolve('Deleted')
          }
          return Promise.reject('Error removing player from server')
        })
          .then(res => {
            this.setState({players: this.state.notes.filter(player=> player.id !== playerId)})
          })         
    )}

  handleDeleteGameById(gameId) {
    return(
      fetch(`http://localhost:8080/api/games/${gameId}`), {
        method: 'DELETE',
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
          'Content-type': 'application/json'
        }
      })
        .then(res => {
          if (res.ok) {
            return Promise.resolve('Deleted')
          }
          return Promise.reject('Error removing game from server')
        })
            .then(res => {
              this.setState({games: this.state.notes.filter(game=> game.id !== gameId)})
            })         
  }

  handleAddGame(userId, game) {
    return(
      fetch(`http://localhost:8080/api/users/${userId}`), {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
          'Content-type': 'application/json'
        }
      })
        .then(res => {
          if(res.ok) {
            return Promise.resolve('Added')
          }
          return Promise.reject('Error adding game to server')
        })
            .then(res => {
              this.setState({games: game, ...this.state.games})
            })
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
            <Route
              exact
              path={'/create_game'}
              component={CreateGamePage}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
