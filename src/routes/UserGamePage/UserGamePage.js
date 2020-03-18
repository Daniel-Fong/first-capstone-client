import React from 'react'
import TokenService from '../../services/token-service'
import PlayersList from '../../components/PlayersList/PlayersList'
import config from '../../config'
import PlayerOption from '../../components/PlayerOption/PlayerOption'

class UserGamePage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
        push: () => {},
    },
}
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
              this.setState({playersForSelect: players})
            })
        this.fetchPIG(this.props.match.params.game_id)
            .then(pigs => {
              this.setState({pig: pigs})
            })
        // this.fetchPlayersNotInGame(this.props.match.params.game_id)
        //     .then((players) => {
        //         this.setState({playersNotInGame: players})
        //     })
    }

    fetchPIG = ( gameid ) => {
      return(
        fetch(`${config.API_ENDPOINT}/players/pig/${gameid}`, {
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
        this.setState({pig: [...this.state.pig, playeringame]})
        return this.fetchPlayersByGameId(gameid)
      })
        .then(players => {
          this.setState({players: players})
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
            return this.fetchPlayersByGameId(this.state.game.id)
          })
            .then(players => {
              this.setState({players: players})
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
              <header>
                <h1>{this.state.game.name}</h1>
                <p>{this.state.game.date_modified}</p>
                <p>{this.state.game.notes}</p>
                <button className='back-button' type='submit' onClick={() => {
                  this.props.history.goBack()
                }}>Return to Home Page</button>
              </header>
              <form className='add-player-to-game-form'>
                <h2>Add Player</h2>
                <select defaultValue='' onChange={(e) => {
                        e.preventDefault();
                        this.handleAddPlayerToGame(e.target.value)
                      }
                    }>
                        <option value='none'>Select a Player to Add</option>
                          { this.state.playersForSelect.map((player) => <PlayerOption key={player.id} player={player}/> )}
                </select>
              </form>
              <PlayersList state={this.state} render={true} players={this.state.players} gameid={this.props.match.params.game_id} handleDeletePIG={this.handleDeletePIG} />
            </div>
        )
    }
}

export default UserGamePage;