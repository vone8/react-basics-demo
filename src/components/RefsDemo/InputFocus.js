import React, { Component } from "react";
import Input from "./Input";

export class InputFocus extends Component {
	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	clickhandler = () => {
		this.componentRef.current.inputFocus();
	};

	render() {
		return (
			<div>
				<Input ref={this.componentRef} />
				<button onClick={this.clickhandler}>Click</button>
			</div>
		);
	}
}

export default InputFocus;
