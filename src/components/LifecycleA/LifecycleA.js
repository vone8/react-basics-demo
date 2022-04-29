import React, { Component } from "react";
import LifecycleB from "../LifecycleB/LifecycleB";

class LifecycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Vijay",
		};
		console.log("Lifecycle A Constructor");
	}
	static getDerivedStateFromProps(props, state) {
		console.log("Lifecycle A getDerivedStateFromProps");
		return null;
	}
	componentDidMount() {
		console.log("Lifecycle A componentDidMount Called");
	}
	shouldComponentUpdate() {
		console.log("Lifecycle A shouldComponentUpdate");
		return true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("Lifecycle A getSnapshotBeforeUpdate");
		return null;
	}
	componentDidUpdate() {
		console.log("Lifecycle A componentDidUpdate");
	}
	changeState = () => {
		this.setState({
			name: "Change State",
		});
	};
	render() {
		console.log("Lifecycle A Render Called");
		return (
			<div>
				<div>LifecycleA</div>
				<button onClick={this.changeState}>Click Here</button>
				<LifecycleB />
			</div>
		);
	}
}

export default LifecycleA;
