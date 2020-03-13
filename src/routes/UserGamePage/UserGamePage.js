import React from 'react'
import TokenService from '../../services/token-service'

class UserGamePage extends React.Component {
    state = {
        players: [],
        scores: [],
        error: null,
    }

    componentDidMount() {
        const players = this.fetchPlayersByGameId(this.props.match.params.game_id)

    }

    fetchPlayersByGameId(gameId) {
        return(
          fetch(`http://localhost:8080/api/players/${gameId}`), {
              headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
              }
          }
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
        return(
            <div>

            </div>
        )
    }
}

export default UserGamePage;