import React from "react";

export class Container extends React.Component {
	render() {
		return (
			<div>
				<div>{this.props.title}</div>
				<div className="containerStyle">{this.props.children}</div>
			</div>
		);
	}
}
