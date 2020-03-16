import React from 'react'
import Player from './Player/Player'
import './PlayersList.css'

class PlayersList extends React.Component {
    render () {
        return (
            <ul className='players-ul'>
                {this.props.players.map(player => <Player render={this.props.render} key={player.id} player={player} userId={this.props.userId} gameid={this.props.gameid}/>)}
            </ul>
        )
    }
} 

export default PlayersList;