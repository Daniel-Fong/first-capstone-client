import React from 'react'

class CreateGamePage extends React.Component {
    render() {
        return (
            <div>
                <form className='create-game-form'>
                    <label >Title</label>
                    <input />
                    <label >Game Name</label>
                    <input />
                    <label>Game Type</label>
                    <input />
                    <label >Number of Players</label>
                    <input />
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

export default CreateGamePage;