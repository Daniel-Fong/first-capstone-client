import React from 'react';
import './App.css';
import LandingPage from './routes/LandingPage/LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import UserGamePage from './routes/UserGamePage/UserGamePage'

import SnapshotContext from './context/SnapshotContext'
import UserWelcomePage from './routes/UserWelcomePage/UserWelcomePage';

class App extends React.Component {
  state = {
    user: {},
    games: [],
    players: [],
    scores: [],
    error: null
  };

  componentDidMount() {
    this.fetchGamesByUserId(this.state.user.id).then(games => this.setState({ games }))
}

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

  handleDeletePlayerById(playerId) {
    return(
      fetch(`http://localhost:8080/api/players/${playerId}`, {
        method: 'DELETE',
        headers: {
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
              path={'/users/:user_id'}
              component={UserWelcomePage}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
