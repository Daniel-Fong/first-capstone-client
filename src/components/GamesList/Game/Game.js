import React from 'react'
import { Link } from 'react-router-dom'

class Game extends React.Component {
    render() {
        return(
            <Link to='/:user_id/:game_id'>
            <li className='game-li'>
                <h3>{this.props.game.name}</h3>
                <p className='game-notes-p'>{this.props.game.notes}</p>
                <p className='date-modified-p'>{this.props.game.date_modified}</p>
            </li>
            </Link>
        )
    }
}

export default Game;