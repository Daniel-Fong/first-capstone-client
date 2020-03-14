import React from 'react'
import Player from './Player/Player'

class PlayersList extends React.Component {
    render () {
        return (
            <ul className='players-ul'>
                {this.props.players.map(player => <Player key={player.id} player={player} userId={this.props.userId} gameid={this.props.gameid}/>)}
            </ul>
        )
    }
} 

export default PlayersList;