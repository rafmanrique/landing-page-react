import React from "react";
import NavBar from "./navbar.jsx";
import Container from "./container.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<>
			<NavBar />
			<div className="mt-4">
				<Container />
			</div>
			<div className="mt-4">
				<Footer />
			</div>
		</>
	);
};

export default Home;
