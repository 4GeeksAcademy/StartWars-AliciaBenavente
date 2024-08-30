import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars Icon</span>
			</Link>
			<div>
				<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
					Favorites <span className="badge bg-secondary">x</span>
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" value="empty">Action</a></li>
				</ul>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
