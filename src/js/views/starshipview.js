import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipView = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);
	
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.starship_id}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

StarshipView.propTypes = {
	match: PropTypes.object
};



