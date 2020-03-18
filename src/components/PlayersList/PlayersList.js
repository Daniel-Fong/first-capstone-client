import React from 'react'
import Player from './Player/Player'
import './PlayersList.css'

class PlayersList extends React.Component {
    render () {
        let render = this.props.render;
        const renderPlayersList = () => {
            if (render) {
                return <ul className='players-ul'>
                            {this.props.players.map(player => <Player state={this.props.state} render={this.props.render} key={player.id} player={player} userId={this.props.userId} gameid={this.props.gameid} handleDeletePlayer={this.props.handleDeletePlayer} handleDeletePIG={this.props.handleDeletePIG}/>)}
                       </ul>
            }
            return <ul className='players-ul-welcome'>
                    {this.props.players.map(player => <Player render={this.props.render} key={player.id} player={player} userId={this.props.userId} gameid={this.props.gameid} handleDeletePlayer={this.props.handleDeletePlayer} handleDeletePIG={this.props.handleDeletePIG}/>)}
                   </ul>
        }
        return (
            <div className='players-list-div'>
            {renderPlayersList()}
            </div>
        )
    }
} 

export default PlayersList;