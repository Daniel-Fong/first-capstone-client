import React from 'react'
import ScoresList from './ScoresList/ScoresList'
import {v4 as uuidv4} from 'uuid'
import { BsTrash } from 'react-icons/bs'
import { IconContext } from 'react-icons'

class Player extends React.Component {
    render() {
        let render = this.props.render;
        const renderScoresList = () => {
            if (render) {
                return <ScoresList key={uuidv4} playerid={this.props.player.id} gameid={this.props.gameid} />
            }
        }
        const renderDeleteButton = () => {
            if(render) {
                return <button className='delete-player-from-game-button' onClick={(e) => {
                    e.preventDefault()
                    this.props.handleDeletePIG(this.props.player.id)
                }}>Remove from Game</button>
            }
            return <IconContext.Provider value={{ size: 20, className: 'react-icon'}} >
                        <button type='delete' className='delete-player-button' onClick={(e) => {
                        e.preventDefault()
                        this.props.handleDeletePlayer(this.props.player.id)
                        }}><BsTrash /></button>
                    </IconContext.Provider>
        }
        return(
            <li className='player-li'>
                <h3>{this.props.player.name}</h3>
                <p className='player-notes-p'>{this.props.player.notes}</p>
                {renderDeleteButton()}
                {renderScoresList()}
            </li>
        )
    }
}

export default Player;