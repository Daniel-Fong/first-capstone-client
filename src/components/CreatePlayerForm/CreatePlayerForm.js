import React from 'react'

class CreatePlayerForm extends React.Component {
    render() {
        return (
            <div className='add-player-form'>
                <h2>Add New Player</h2>
                <form className='create-game-form' onSubmit={(e) => {
                    e.preventDefault()
                    this.props.handleAddPlayer(e)
                }}>
                    <label htmlFor='name'>Name</label>
                    <input name='name' required/>
                    <label htmlFor='notes'>Notes</label>
                    <input name='notes'/>
                    <button type='submit' className='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreatePlayerForm;