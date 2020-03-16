import React from 'react'
import './Score.css'

class Score extends React.Component {
    render() {
        return(
            <li className='score-li'>
                <p>{this.props.score.score}</p>
                <p>{this.props.score.note}</p>
                <button className='delete-score-button' type='delete' onClick={(e) => {
                    e.preventDefault()
                    this.props.handleDeleteScore(e, this.props.score.id)
                }}>Delete Score</button>
            </li>
        )
    }
}

export default Score;