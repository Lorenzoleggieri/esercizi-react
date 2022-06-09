import React from 'react'

export class Login extends React.Component {
	state = {
		username: '',
		password: '',
		remember: false,
	}

	handleInputChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		const type = event.target.type
		const checked = event.target.checked

		this.setState({
			[name]: type === 'checkbox' ? checked : value,
		})
	}
    
    LoginButtonClick = () => {
		this.props.onLogin(this.state)
	}

	render() {
		return (
			<div>
				<input
					name="username"
					value={this.state.username}
					onChange={this.handleInputChange}
				/>
				<input
					name="password"
					value={this.state.password}
					onChange={this.handleInputChange}
				/>
				<input
					name="remember"
					type="checkbox"
					checked={this.state.remember}
					onChange={this.handleInputChange}
				/>
                
                
                <button
					data-testid="login"
					disabled={!this.state.username || !this.state.password}
					onClick={this.LoginButtonClick}
				>
					Login
				</button>


			</div>
		)
	}
}