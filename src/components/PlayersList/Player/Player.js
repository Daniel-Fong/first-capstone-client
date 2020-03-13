import React from 'react'

class Player extends React.Component {
    render() {
        return(
            <li className='player-li'>
                <h3>{this.props.player.name}</h3>
                <p className='player-notes-p'>{this.props.player.notes}</p>
            </li>
        )
    }
}

export default Player;