import React from 'react'

class PlayerOption extends React.Component {
    render() {
        return (
            <option value={this.props.player.id}>
                {this.props.player.name}
            </option>
        )
    }
}

export default PlayerOption;