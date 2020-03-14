import React from 'react'
import TokenService from '../../services/token-service'
import PlayersList from '../../components/PlayersList/PlayersList'
import config from '../../config'

class UserGamePage extends React.Component {
    state = {
        players: [],
        scores: [],
        game: null,
        error: null,
    }

    componentDidMount() {
        this.fetchPlayersByGameId(this.props.match.params.game_id, )
            .then(players => {
                this.setState({players: players}) 
            })
    }

    fetchPlayersByGameId(gameid) {
        return(
            fetch(`${config.API_ENDPOINT}/players/${gameid}`, {
                headers: {
                  'authorization': `bearer ${TokenService.getAuthToken()}`,
                }
            })
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
                <PlayersList players={this.state.players} gameid={this.props.match.params.game_id} />
            </div>
        )
    }
}

export default UserGamePage;