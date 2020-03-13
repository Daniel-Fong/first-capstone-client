import React from 'react'
import GamesList from '../../components/GamesList/GamesList'
import config from '../../config'
import TokenService from '../../services/token-service'
import PlayersList from '../../components/PlayersList/PlayersList'

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
                        <li>Home</li>
                        <li>My Games</li>
                        <li>Create New Game</li>
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
                        <GamesList games={this.state.games} userId={this.state.userid} />
                        <PlayersList players={this.state.players} userId={this.state.userid} />
                    </div>
                </main>
            </div>
        )
    }
}

export default UserWelcomePage;