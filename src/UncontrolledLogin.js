import React, { createRef } from 'react'

export class UncontrolledLogin extends React.Component {
	_formRef = createRef()

	state = {
		LoginButton: false,
	}

	Login = (event) => {
		event.preventDefault()

		const username = event.target.elements.username.value
		const password = event.target.elements.password.value
		const remember = event.target.elements.remember.checked

		this.props.onLogin({ username, password, remember })
	}

	LoginButtonEnabled = () => {
		const username = this._formRef.current.elements.username.value
		const password = this._formRef.current.elements.password.value

		this.setState({
			enableLoginButton: !!username && !!password,
		})
	}

	render() {
		return (
			<form onSubmit={this.Login} ref={this._formRef}>
				<input data-testid="username" name="username" onChange={this.LoginButtonEnabled} />
				<input
					data-testid="password"
					name="password"
					type="password"
					onChange={this.LoginButtonEnabled}
				/>
				<input data-testid="remember" name="remember" type="checkbox" />

				<button type="submit" data-testid="login" disabled={!this.state.LoginButton}>
					Login
				</button>
				<button type="reset" data-testid="reset">
					Reset
				</button>
			</form>
		)
	}
}