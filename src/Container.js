import React from "react";

export class Container extends React.Component {
	render() {
		return <div className="containerStyle">{this.props.children}</div>;
	}
}
