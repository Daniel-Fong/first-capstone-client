import React from 'react'
import Score from './Score/Score'

class ScoresList extends React.Component {
    state = {
        scores: [],
    }
//need game id and player id
    componentDidMount() {

    }

    render() {
        return(
            <div className='scores-list-div'>
            <h3>Score(s)</h3>
            <ul className='scores-list-ul'>
                {this.state.scores.map(score => <Score score={score} />)}
            </ul>
            </div>
        )
    }
}

export default ScoresList;