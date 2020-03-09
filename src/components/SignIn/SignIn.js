import React from 'react'

class SignIn extends React.Component {
    render() {
        return (
            <section class='sign-in-section'>
                <h2>Existing Users</h2>
                <h3>Sign In</h3>
                <form>
                    <label for='sign-in-username'>Username</label>
                    <input name='sign-in-username' />
                    <label for='sign-in-password'>Password</label>
                    <input name='sign-in-password' />
                    <button>Submit</button>
                </form>
            </section>
        )
    }
}

export default SignIn;