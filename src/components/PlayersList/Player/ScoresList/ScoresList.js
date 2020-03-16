import React from 'react'
import Score from './Score/Score'
import config from '../../../../config'
import TokenService from '../../../../services/token-service'
import './ScoresList.css'
class ScoresList extends React.Component {
    state = {
        scores: [],
    }
    componentDidMount() {
        this.fetchScores()
            .then(scores => this.setState({ scores: scores }))
    }

    handleDeleteScore = (e, id) => {
        const scoreid = id
        return (
            fetch(`${config.API_ENDPOINT}/scores/${scoreid}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `bearer ${TokenService.getAuthToken()}`
                },
            })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                // return res.json()
            })
            .then((score) => {
              this.setState({ scores: this.state.scores.filter(score => score.id !== scoreid)})
            })
            .catch(error => {
              console.error({ error })
            })
        )}

    handleAddScore = (e) => {
        e.preventDefault()
        const score = e.target.score.value
        const note = e.target.note.value
        let newScore = JSON.stringify({
            playerid: this.props.playerid,
            gameid: this.props.gameid,
            score: score,
            note: note
        })
        return(
            fetch(`${config.API_ENDPOINT}/scores/${this.props.gameid}/${this.props.playerid}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${TokenService.getAuthToken()}`
                },
                body: newScore
            })
            .then(res => {
                if (!res.ok)
                  return res.json().then(e => Promise.reject(e))
                return res.json()
              })
              .then((score) => {
                this.setState({ scores: [...this.state.scores, score]})
              })
              .catch(error => {
                console.error({ error })
              })
        )}

    fetchScores() {
        return(
            fetch(`${config.API_ENDPOINT}/scores/${this.props.gameid}/${this.props.playerid}`, {
                headers: {
                  'authorization': `bearer ${TokenService.getAuthToken()}`,
                }
            })
              .then(res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject('Error fetching scores from server')
              })
              .catch(err => {
                this.setState({error: err})
              })
          )
        } 

    render() {
        return(
            <div className='scores-list-div'>
            <h3>Score(s)</h3>
            <ul className='scores-list-ul'>
                {this.state.scores.map(score => <Score key={score.id} handleDeleteScore={this.handleDeleteScore} score={score} />)}
            </ul>
            <form className='add-score-form' onSubmit={(e) => {
                    this.handleAddScore(e)
                }}>
                <h2 className='add-score-h2'>Add New Score or Note</h2>
                <label htmlFor='score'>Score</label>
                <input name='score' />
                <label htmlFor='note'>Note</label>
                <input name='note' />
                <button className='add-score-button' type='submit'>Add Score</button>
            </form>
            </div>
        )
    }
}

export default ScoresList;