import React from 'react'
import { Link } from 'react-router-dom'
import { BsTrash } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import './Game.css'

class Game extends React.Component {
    render() {
        return(
            <Link to={`/${this.props.game.id}`}>
            <li className='game-li'>
                <h3>{this.props.game.name}</h3>
                <p className='game-notes-p'>{this.props.game.notes}</p>
                <p className='date-modified-p'>{this.props.game.date_modified}</p>
                <IconContext.Provider value={{ size: 20, className: 'react-icon'}} >
                    <button className='game-delete-button' type='delete' title='Delete' alt='delete' onClick={(e) => {
                        e.preventDefault()
                        this.props.handleDeleteGame(this.props.game.id)
                    }}><BsTrash /></button>
                </IconContext.Provider>
            </li>
            </Link>
        )
    }
}

export default Game;