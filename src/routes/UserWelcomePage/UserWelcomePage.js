import React from 'react'
import GamesList from '../../components/GamesList/GamesList'
import config from '../../config'
import TokenService from '../../services/token-service'
import PlayersList from '../../components/PlayersList/PlayersList'
import { Link } from 'react-router-dom'
import CreateGameForm from '../../components/CreateGameForm/CreateGameForm'
import CreatePlayerForm from '../../components/CreatePlayerForm/CreatePlayerForm'
import './UserWelcomePage.css'

class UserWelcomePage extends React.Component {
    state = {
        games: [],
        players: [],
        userName: null,
        error: null,
    }

    componentDidMount() {
       this.fetchGamesByUserId()
        .then((games) => {
            this.setState({games})
        })
        .catch(error => {
            console.error({error})
        })
       this.fetchPlayersByUserId()
        .then((players) => {
            this.setState({players})
        })
        .catch(error => {
            console.error({error})
        })
      this.fetchUserById()
        .then(user => {
          this.setState({userName: user[0].name})
        })
    }

    fetchUserById = () => {
      return (
        fetch(`${config.API_ENDPOINT}/users/user`, {
          headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject('Error fetching user from server');
        })
        .catch(err => {
          this.setState({error: err})
        })
      )
    }

    handleAddGame = (e) => {
        const name = e.target.name.value
        const notes = e.target.notes.value
        let newGame = JSON.stringify({
            name: name,
            notes: notes
        })
        return(
          fetch(`${config.API_ENDPOINT}/games`, {
            method: 'POST',
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
              'Content-type': 'application/json'
            },
            body: newGame
          })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
          .then(game => {
            this.setState({games: [...this.state.games, game]})
          })
          .catch(error => {
            console.error({ error })
          })
          )}

    handleAddPlayer = (e) => {
      const name = e.target.name.value
        const notes = e.target.notes.value
        let newPlayer = JSON.stringify({
            name: name,
            notes: notes
        })
        return(
          fetch(`${config.API_ENDPOINT}/players`, {
            method: 'POST',
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
              'Content-type': 'application/json'
            },
            body: newPlayer
          })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
          .then(player => {
            this.setState({players: [...this.state.players, player]})
          })
          .catch(error => {
            console.error({ error })
          })
        )}

    handleDeletePlayerById = (playerid) => {
      return(
        fetch(`${config.API_ENDPOINT}/players/${playerid}`, {
          method: 'DELETE',
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            'Content-type': 'application/json'
          }
        })
          .then(res => {
            this.setState({players: this.state.players.filter(player=> player.id !== playerid)})
          })         
      )}

    handleDeleteGameById = (gameid) => {
        return(
          fetch(`${config.API_ENDPOINT}/games/${gameid}`, {
            method: 'DELETE',
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
              'Content-type': 'application/json'
            }
          })
            .then(res => {
              this.setState({games: this.state.games.filter(game=> game.id !== gameid)})
            })         
        )}

    handleDeletePlayerById = (playerId) => {
        return(
          fetch(`${config.API_ENDPOINT}/players/player/${playerId}`, {
            method: 'DELETE',
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
              'Content-Type': 'application/json'
            }
          })
              .then(res => {
                this.setState({players: this.state.players.filter(player=> player.id !== playerId)})
              })         
        )}

    fetchPlayersByUserId() {
        return(
            fetch(`${config.API_ENDPOINT}/players`, {
                headers: {
                    'authorization': `bearer ${TokenService.getAuthToken()}`,
                },
            })
              .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject('Error fetching players from server');
              })
              .catch(err => {
                this.setState({error: err})
              })
            )
          }
    
    fetchGamesByUserId() {
        return(
          fetch(`${config.API_ENDPOINT}/games`, {
              headers: {
                  'authorization': `bearer ${TokenService.getAuthToken()}`,
              },
          })
            .then(res => {
              if (res.ok) {
                return res.json();
              }
              return Promise.reject('Error fetching games from server');
            })
            .catch(err => {
              this.setState({error: err})
            })
          )
        }

    render() {
        return (
            <div className='user-welcome-div'>
                <header>
                    <h1>Welcome {this.state.userName}!</h1>
                    <Link to='/'>
                    <button className='logout-button' type='submit' onClick={(e) => {
                      TokenService.clearAuthToken()
                    }}>Logout</button>
                    </Link>
                </header>
                <main className='welcome-page-main'>
                    <div className='games-div'>
                    <h2>Create a New Game</h2>
                      <CreateGameForm handleAddGame={this.handleAddGame} />
                    <h2>{this.state.userName}'s Saved Games</h2>
                    {/* <label>Sort By</label>
                    <select>
                        <option>Date Old to New</option>
                        <option>Date New to Old</option>
                    </select>
                    <label>Search</label>
                    <input /> */}
                        <GamesList games={this.state.games} userId={this.state.userid} handleDeleteGame={this.handleDeleteGameById} />
                    </div>
                    <div className='players-div'>
                        <CreatePlayerForm handleAddPlayer={this.handleAddPlayer}/>
                        <h2>{this.state.userName}'s Players</h2>
                        <PlayersList render={false} players={this.state.players} userId={this.state.userid} handleDeletePlayer={this.handleDeletePlayerById} />
                    </div>
                </main>
            </div>
        )
    }
}

export default UserWelcomePage;