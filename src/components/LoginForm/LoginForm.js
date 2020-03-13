import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
          <label for='sign-in-username'>Username</label>
          <input name='sign-in-username' />
          <label for='sign-in-password'>Password</label>
          <input name='sign-in-password' />
          <button>Submit</button>
      </form>
    )
  }
}
