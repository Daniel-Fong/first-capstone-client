import React from 'react'
import Game from './Game/Game'

class GamesList extends React.Component {
    render() {
        return ( 
            <ul className='games-ul'>
                {this.props.games.map(game => <Game key={game.id} game={game} userId={this.props.userId} handleDeleteGame={this.props.handleDeleteGame}/>)}
            </ul>
        )
    }
}

export default GamesList;