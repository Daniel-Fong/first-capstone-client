import React from 'react'
import ScoresList from './ScoresList/ScoresList'
import {v4 as uuidv4} from 'uuid'

class Player extends React.Component {
    render() {
        let render = this.props.render;
        const renderScoresList = () => {
            if (render) {
                return <ScoresList key={uuidv4} playerid={this.props.player.id} gameid={this.props.gameid} />
            }
        }
        return(
            <li className='player-li'>
                <h3>{this.props.player.name}</h3>
                <p className='player-notes-p'>{this.props.player.notes}</p>
                <button type='delete' className='delete-player-button' onClick={(e) => {
                    e.preventDefault()
                    this.props.handleDeletePlayer(this.props.player.id)
                }}>Delete Player</button>
                {renderScoresList()}
            </li>
        )
    }
}

export default Player;