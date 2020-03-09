import React from 'react'
import SignUp from '../../components/SignUp/SignUp'
import { Link } from 'react-router-dom'

class RegistrationPage extends React.Component {
    render() {
        return (
            <div className='registration-page-div'>
                <SignUp />
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default RegistrationPage;