import React, { Component } from "react";

class ClickCounterRenderProps extends Component {
	render() {
		const { count, clickHandler } = this.props;
		return (
			<div>
				<button onClick={clickHandler}>Button Clicked {count} Times</button>
			</div>
		);
	}
}

export default ClickCounterRenderProps;
