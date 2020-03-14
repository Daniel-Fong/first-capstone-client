import React from 'react'
import ScoresList from './ScoresList/ScoresList'

class Player extends React.Component {
    render() {
        return(
            <li className='player-li'>
                <h3>{this.props.player.name}</h3>
                <p className='player-notes-p'>{this.props.player.notes}</p>
                <ScoresList playerid={this.props.player.id} gameid={this.props.gameid} />
            </li>
        )
    }
}

export default Player;