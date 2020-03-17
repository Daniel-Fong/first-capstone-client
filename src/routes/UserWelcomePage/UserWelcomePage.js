import React from 'react'
import GamesList from '../../components/GamesList/GamesList'
import config from '../../config'
import TokenService from '../../services/token-service'
import PlayersList from '../../components/PlayersList/PlayersList'
import { Link } from 'react-router-dom'
import CreateGameForm from '../../components/CreateGameForm/CreateGameForm'

class UserWelcomePage extends React.Component {
    state = {
        games: [],
        players: [],
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
    }

    handleAddGame = (e) => {
        const name = e.target.name.value
        const notes = e.target.notes.value
        let newGame = JSON.stringify({
            name: name,
            notes: notes
        })
        return(
          fetch(`http://localhost:8080/api/games`, {
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
          fetch(`http://localhost:8080/api/players`, {
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

    handleDeleteGameById = (gameId) => {
        return(
          fetch(`http://localhost:8080/api/games/${gameId}`, {
            method: 'DELETE',
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
              'Content-type': 'application/json'
            }
          })
            .then(res => {
              this.setState({games: this.state.games.filter(game=> game.id !== gameId)})
            })         
        )}

    handleDeletePlayerById = (playerId) => {
        return(
          fetch(`http://localhost:8080/api/players/${playerId}`, {
            method: 'DELETE',
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
              'Content-Type': 'application/json'
            }
          })
              .then(res => {
                this.setState({players: this.state.notes.filter(player=> player.id !== playerId)})
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
                    <ul className='navbar'>
                        <Link to='/users'>
                        <li>Home</li>
                        </Link>
                        <li>My Games</li>
                        <li><button>Create New Game</button></li>
                        <CreateGameForm handleAddGame={this.handleAddGame} />
                    </ul>
                    <h2>Welcome User</h2>
                </header>
                <main>
                    <button>Start a New Game</button>
                    <h3>My Saved Games</h3>
                    <label>Sort By</label>
                    <select>
                        <option>Date Old to New</option>
                        <option>Date New to Old</option>
                    </select>
                    <label>Search</label>
                    <input />
                    <div>
                        <GamesList games={this.state.games} userId={this.state.userid} handleDeleteGame={this.handleDeleteGameById} />
                        <PlayersList render={false} players={this.state.players} userId={this.state.userid} handleDeletePlayer={this.handleDeletePlayerById} />
                    </div>
                </main>
            </div>
        )
    }
}

export default UserWelcomePage;