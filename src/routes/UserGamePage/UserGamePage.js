import React from 'react'
import TokenService from '../../services/token-service'
import PlayersList from '../../components/PlayersList/PlayersList'
import config from '../../config'
import PlayerOption from '../../components/PlayerOption/PlayerOption'

class UserGamePage extends React.Component {
    state = {
        playersForSelect: [],
        players: [],
        game: {},
        pig: [],
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
        this.fetchPlayersByUserId()
            .then(players => {
              console.log(players)
              this.setState({playersForSelect: players})
            })
        // this.fetchPlayersNotInGame(this.props.match.params.game_id)
        //     .then((players) => {
        //         this.setState({playersNotInGame: players})
        //     })
    }

    handleAddPlayerToGame = ( playerid ) => {
      const gameid = this.state.game.id
      const newPlayerInGame = { playerid, gameid }
      return(
        fetch(`${config.API_ENDPOINT}/players/pig`, {
          method: 'POST',
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            'Content-type': 'application/json'
          },
          body: JSON.stringify(newPlayerInGame)
        })
       .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(playeringame => {
        this.setState({pig: [playeringame]})
      })
      .catch(error => {
        console.error({ error })
      })
    )}

    handleDeletePIG = (playerid) => {
      return(
        fetch(`http://localhost:8080/api/players/pig/${playerid}/${this.state.game.id}`, {
          method: 'DELETE',
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            'Content-type': 'application/json'
          }
        })
          .then(res => {
            this.setState({pig: this.state.pig.filter(pig=> pig.playerid !== playerid)})
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

    // fetchPlayersNotInGame() {
    //   return(
    //       fetch(`${config.API_ENDPOINT}/players/list/:gameid`, {
    //           headers: {
    //               'authorization': `bearer ${TokenService.getAuthToken()}`,
    //           },
    //       })
    //         .then(res => {
    //           if (res.ok) {
    //             return res.json();
    //           }
    //           return Promise.reject('Error fetching players from server');
    //         })
    //         .catch(err => {
    //           this.setState({error: err})
    //         })
    //       )
    //     }

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
              <form className='add-player-to-game-form'>
                <select onChange={(e) => {
                        e.preventDefault();
                        this.handleAddPlayerToGame(e.target.value)
                        console.log(this.state.pig)}
                    }>
                          { this.state.playersForSelect.map((player) => <PlayerOption key={player.id} player={player}/> )}
                </select>
                <button className='add-player-to-game-button' typ='submit'>Add</button>
              </form>
              <PlayersList render={true} players={this.state.players} gameid={this.props.match.params.game_id} handleDeletePIG={this.handleDeletePIG} />
            </div>
        )
    }
}

export default UserGamePage;