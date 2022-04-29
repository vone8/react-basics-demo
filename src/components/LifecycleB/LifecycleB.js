import React, { Component } from "react";

class LifecycleB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Vijay",
		};
	}

	shouldComponentUpdate() {
		console.log("Lifecycle B shouldComponentUpdate");
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("Lifecycle B getSnapshotBeforeUpdate");
		return null;
	}

	componentDidUpdate() {
		console.log("Lifecycle B componentDidUpdate");
	}

	render() {
		return <div>LifecycleB</div>;
	}
}

export default LifecycleB;
