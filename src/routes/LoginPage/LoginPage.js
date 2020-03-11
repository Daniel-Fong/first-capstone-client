import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {
    render() {
        return (
            <div className='login-page-div'>
                <h2>Existing Users</h2>
                <h3>Sign In</h3>
                <form>
                    <label for='sign-in-username'>Username</label>
                    <input name='sign-in-username' />
                    <label for='sign-in-password'>Password</label>
                    <input name='sign-in-password' />
                    <button>Submit</button>
                </form>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default LoginPage;