import React from "react";

function Person({ person }) {
	return (
		<div>
			<p>
				I am {person.name} with ID:{person.id} My age is {person.age} and I am{" "}
				{person.skills}.
			</p>
		</div>
	);
}

export default Person;
