import React, { Component } from "react";

export class HoverCounterRenderProps extends Component {
	render() {
		console.log(this.props);
		const { count, clickHandler } = this.props;

		return <div onMouseOver={clickHandler}>Hovered {count} times</div>;
	}
}

export default HoverCounterRenderProps;
