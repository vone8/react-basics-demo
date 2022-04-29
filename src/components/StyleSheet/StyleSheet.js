import React from "react";
import "./StyleSheet.css";

function StyleSheet(props) {
	let heading = props.h1 ? "h1" : "";
	return (
		<div>
			<h1 className={`${heading} aquamarine`}>Hellow World</h1>
		</div>
	);
}

export default StyleSheet;
