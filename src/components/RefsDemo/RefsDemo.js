import React, { Component } from "react";

export class RefsDemo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
		this.callBackRef = null;
		this.setcallBackRef = (element) => {
			this.callBackRef = element;
		};
	}

	componentDidMount() {
		if (this.callBackRef) {
			this.callBackRef.focus();
		}
		// this.inputRef.current.focus();
		// console.log(this.inputRef);
	}

	clickHandler = () => {
		alert(this.inputRef.current.value);
	};

	render() {
		return (
			<div>
				<input type="text" name="text" ref={this.inputRef} />
				<input type="text" name="text" ref={this.setcallBackRef} />
				<button onClick={this.clickHandler}>Click Here</button>
			</div>
		);
	}
}

export default RefsDemo;
