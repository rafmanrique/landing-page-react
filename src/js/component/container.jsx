import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";

const cardList = [
	{ name: "Card 1" },
	{ name: "Card 2" },
	{ name: "Card 3" },
	{ name: "Card 4" },
];

const Container = () => {
	return (
		<>
			<div className="container d-flex justify-content-center">
				<Jumbotron />
			</div>
			<div className="container d-flex justify-content-center">
				<Cards cardList={cardList} />
			</div>
		</>
	);
};

export default Container;
