import React from 'react'

class CreateGamePage extends React.Component {
    render() {
        return (
            <div>
                <form className='create-game-form'>
                    <label htmlFor='game-name'>Name</label>
                    <input name='game-name' required/>
                    <label htmlFor='notes'>Notes</label>
                    <input name='notes'/>
                    <button type='submit' className='submit' onClick={(e => {
                        e.preventDefault();
                        this.props.handleAddGame()})}>
                Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateGamePage;