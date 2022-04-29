import React from "react";

function FunctionClick() {
	function eventHandler() {
		console.log("Button Clicked !!!");
	}
	return (
		<div>
			<button onClick={eventHandler}>Click</button>
		</div>
	);
}

export default FunctionClick;
