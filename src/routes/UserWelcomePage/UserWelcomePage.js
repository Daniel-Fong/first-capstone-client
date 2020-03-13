import React from 'react'
import GamesList from '../../components/GamesList/GamesList'

class UserWelcomePage extends React.Component {
    state = {
        games: [],
        userid: null,
        error: null,
    }

    componentDidMount() {
        this.setState({ userid: this.props.match.params.user_id })
        this.fetchGamesByUserId(this.state.userid)
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