import React from 'react'
import TokenService from '../../services/token-service'
import PlayersList from '../../components/PlayersList/PlayersList'
import config from '../../config'
import PlayerOption from '../../components/PlayerOption/PlayerOption'

class UserGamePage extends React.Component {
    state = {
        playersNotInGame: [],
        players: [],
        game: {},
        error: null
    }

    componentDidMount() {
        this.fetchPlayersByGameId(this.props.match.params.game_id)
            .then(players => {
                this.setState({players: players}) 
            })
        this.fetchGameById(this.props.match.params.game_id)
            .then(game => {
              this.setState({ game: game })
            })
        this.fetchPlayersNotInGame(this.props.match.params.game_id)
            .then((players) => {
                this.setState({playersNotInGame: players})
            })
    }

    handleAddPlayerToGame(gameid, playerid) {

    }

    fetchPlayersNotInGame() {
      return(
          fetch(`${config.API_ENDPOINT}/players/list/:gameid`, {
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

    fetchGameById(gameid) {
      return(
        fetch(`${config.API_ENDPOINT}/games/${gameid}`, {
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
            <div className='user-game-page-div'>
              <h1>{this.state.game.name}</h1>
              <p>{this.state.game.date_modified}</p>
              <p>{this.state.game.notes}</p>
              <h2>Add Player</h2>
              <select onChange={(e) => {
                        e.preventDefault();
                        this.props.handleAddPlayerToGame(e.target.value)}
                    }
                  >
                          { this.state.players.map((player) => <PlayerOption key={player.id} player={player}/> )}
                  </select>
              <PlayersList render={true} players={this.state.players} gameid={this.props.match.params.game_id} />
            </div>
        )
    }
}

export default UserGamePage;