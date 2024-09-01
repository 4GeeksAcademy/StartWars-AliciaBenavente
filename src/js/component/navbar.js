import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
	const { store, actions } = useContext(Context);
	console.log("props from navbar", props);
	
	

	return (
		<nav className="navbar navbar-light bg-light mb-3 justify-content-around">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars Icon</span>
			</Link>
			
			<div className="ml-auto">
				{/* <Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> */}
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
						Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">

					{store.favorites.length === 0 ? (
						<li className="dropdown-item">(empty... but Vader is the best ;)</li>
					) : (
						store.favorites.map((favorite,index) => (
							<li className="dropdown-item" key={index}>{favorite}<button className="border-0 bg-transparent float-end" onClick={()=> actions.deleteFavorite(index)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="icon bi bi-trash" viewBox="0 0 16 16">
							<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
							<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
						</svg></button></li>
						))
					)}

					</ul>
				</div>
				
			</div>
		</nav>
	);
};
