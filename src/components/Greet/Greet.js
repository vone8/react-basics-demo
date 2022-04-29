import React from "react";

const Greet = ({ className, name, pos, children }) => {
	return (
		<div className={className}>
			<h1>
				Hi Welcome {name} - {pos}
			</h1>
			{children && children[1]?.props?.children}
			{/* {children} */}
		</div>
	);
};

export default Greet;
