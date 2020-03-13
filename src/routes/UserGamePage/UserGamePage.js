import React from 'react'

class UserGamePage extends React.Component {
    state = {
        players: [],
        scores: [],
        error: null,
    }

    fetchPlayersByGameId(gameId) {
        return(
          fetch(`http://localhost:8080/api/players/${gameId}`)
            .then(res => {
              if (res.ok) {
                return res.json();
              }
              return Promise.reject('Error fetching players from server')
            })
            .catch(err => {
              this.setState({error: err})
            })
        )
      } 

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default UserGamePage;