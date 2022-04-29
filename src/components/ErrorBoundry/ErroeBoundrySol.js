import React, { Component } from "react";

export class ErroeBoundrySol extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
		};
	}

	componentDidCatch(error, info) {
		console.log(error);
		console.log(info);
	}

	render() {
		if (this.state.hasError) {
			return <p>Something Went Wrong...</p>;
		}
		return this.props.children;
	}
}

export default ErroeBoundrySol;
