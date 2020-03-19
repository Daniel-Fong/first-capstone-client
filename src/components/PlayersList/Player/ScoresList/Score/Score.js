import React from 'react'
import './Score.css'
import { BsTrash } from 'react-icons/bs'
import { IconContext } from 'react-icons'

class Score extends React.Component {
    render() {
        return(
            <li className='score-li'>
                <p>{this.props.score.score}</p>
                <p>{this.props.score.note}</p>
                <IconContext.Provider value={{ size: 20, className: 'react-icon'}} >
                <button className='delete-score-button' type='delete' title='Delete' alt='delete' onClick={(e) => {
                    e.preventDefault()
                    this.props.handleDeleteScore(e, this.props.score.id)
                }}><BsTrash /></button>
                </IconContext.Provider>
            </li>
        )
    }
}

export default Score;