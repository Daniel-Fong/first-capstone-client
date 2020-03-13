import React from 'react'
import GamesList from '../../components/GamesList/GamesList'
import config from '../../config'
import TokenService from '../../services/token-service'

class UserWelcomePage extends React.Component {
    state = {
        games: [],
        error: null,
    }

    componentDidMount() {
       this.fetchGamesByUserId()
        .then(res => {
            console.log(res)
            if(!res.ok)
                return res.json().then(e => Promise.reject(e))
            return Promise.all(res.json())
        })
        .then((games) => {
            this.setState({games})
        })
        .catch(error => {
            console.error({error})
        })
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
                    </div>
                </main>
            </div>
        )
    }
}

export default UserWelcomePage;