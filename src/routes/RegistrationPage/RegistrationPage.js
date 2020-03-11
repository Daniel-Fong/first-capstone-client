import React from 'react'
import SignUp from '../../components/SignUp/SignUp'
import { Link } from 'react-router-dom'

class RegistrationPage extends React.Component {
    render() {
        return (
            <div className='registration-page-div'>
                <h2>New Users</h2>
                <h3>Sign Up</h3>
                <form>
                    <label >First Name</label>
                    <input />
                    <label >Last Name</label>
                    <input />
                    <label>Email</label>
                    <input />
                    <label >Username</label>
                    <input />
                    <label >Password</label>
                    <input />
                    <button>Submit</button>
                </form>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default RegistrationPage;