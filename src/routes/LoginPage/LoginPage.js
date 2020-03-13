import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/dashboard'
        history.push(destination)
    }

    render() {
        return (
            <div className='login-page-div'>
                <h2>Existing Users</h2>
                <h3>Sign In</h3>
                <LoginForm onLoginSuccess={this.handleLoginSuccess} />
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default LoginPage;