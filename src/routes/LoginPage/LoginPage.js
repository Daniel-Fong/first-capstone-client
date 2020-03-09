import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {
    render() {
        return (
            <div className='login-page-div'>
                <SignIn />
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default LoginPage;