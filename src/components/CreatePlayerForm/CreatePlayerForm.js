import React from 'react'

class CreatePlayerForm extends React.Component {

    state = {
        name: '',
        notes: '',
    }

    handleNameChange(e) {
        const target = e.target;
        const value = target.value;
  
        this.setState({
          name: value
        })
      }
  
      handleNotesChange(e) {
        const target = e.target;
        const value = target.value;
  
        this.setState({
          notes: value
        })
      }

    render() {
        return (
            <div className='add-player-form'>
                <h2>Add New Player</h2>
                <form className='create-game-form' onSubmit={(e) => {
                    e.preventDefault()
                    this.props.handleAddPlayer(e)
                    this.setState({
                        name: '',
                        notes: '',
                    })
                }}>
                    <label htmlFor='name'>Name</label>
                    <input name='name' required value={this.state.name} onChange={(e) => {
                        this.handleNameChange(e)
                    }}/>
                    <label htmlFor='notes'>Notes</label>
                    <input name='notes' value={this.state.notes} onChange={(e) => {
                        this.handleNotesChange(e) }}/>
                    <button type='submit' className='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreatePlayerForm;