import React from 'react'
import SignIn from '../SignIn/SignIn'

class SignUp extends React.Component {
    render() {
        return (
            <section class='sign-up'>
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
            </section>
        )
    }
}

export default SignUp