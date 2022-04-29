import React from "react";
import Person from "./Person";

function NameList() {
	// const names = ["Vijay", "Jay", "Mandip", "Suraj", "Bunty"];
	const person = [
		{
			id: 1,
			name: "Vijay",
			age: 26,
			skills: "Frontent Developer",
		},
		{
			id: 2,
			name: "Amit",
			age: 25,
			skills: "React Native Developer",
		},
		{
			id: 3,
			name: "Trushar",
			age: 30,
			skills: "Backend Developer",
		},
		{
			id: 4,
			name: "Chicks",
			age: 30,
			skills: "Angular Developer",
		},
	];
	const personLists = person.map((person) => (
		<Person key={person.id} person={person} />
	));
	return <div>{personLists}</div>;
}

export default NameList;
