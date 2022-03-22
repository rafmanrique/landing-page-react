import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const Cards = (props) => {
	return (
		<>
			<div className="row row-cols-1 row-cols-md-4 g-4">
				{props.cardList.map((item, index) => (
					<div className="col">
						<div key={index} className="card h-100">
							<img
								src="https://via.placeholder.com/500x325"
								className="card-img-top"
								alt="placeholder"
							/>
							<div className="card-body text-center">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Possimus cumque
									dignissimos expedita atque, ipsum sunt fugit
									similique consequatur corporis ex iure est
									saepe omnis eveniet laboriosam mollitia
									beatae et! In?
								</p>
							</div>
							<div className="card-footer d-flex justify-content-center">
								<button
									type="button"
									className="btn btn-primary">
									Find Out More!
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

Cards.propTypes = {
	cardList: PropTypes.array,
};

export default Cards;
