import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";



export const PlanetView = () => {
	const { store, actions } = useContext(Context);
	const [ properties, setProperties ] = useState("")
	const [planet, setPlanet] = useState("");
	const  params = useParams();
	console.log(params);
	const [ img, setImg ] = useState(`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`)
   
    const handleError = () => {
        setImg("https://i.makeagif.com/media/12-04-2015/OWULDD.gif");
    };
	
	useEffect(()=> {

			fetch("https://www.swapi.tech/api/planets/" + params.planet_id)
			.then((response)=> response.json())
			.then((data)=> {
				console.log(data.result.properties);
				if(data.result && data.result.properties) {
				setPlanet(data.result)
				setProperties(data.result.properties)
				}})
			.catch((error)=> console.error("Error", error))
		},[])

		return (
			<>
			<body className="bg-dark">
				<div className="row justify-content-evenly">
					<div className="card bg-secondary mt-5" style={{width: "90%", color: "white"}}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src={img} onError={handleError} className="img-fluid rounded-start" alt="Loading..."/>
						</div>
						<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{properties.name || "Loading..."}</h5>
							<p className="card-text">{planet.description || "Loading description..."}</p>
						</div>
						</div>
					</div>
					</div>
				</div>
		
					<table className="table table-borderless table-dark text-center mt-4">
						<thead>
							<tr className="table-dark text-warning">
							<th scope="col"></th>
							<th scope="col">Diameter</th>
							<th scope="col">Rotation period</th>
							<th scope="col">Orbital eriod</th>
							<th scope="col">Gravity</th>
							<th scope="col">Population</th>
							<th scope="col">Climate</th>
							<th scope="col">Terrain</th>
							<th scope="col">Surface water</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<th scope="row"></th>
							<td>{properties.diameter}</td>
							<td>{properties.rotation_period}</td>
							<td>{properties.orbital_period}</td>
							<td>{properties.gravity}</td>
							<td>{properties.population}</td>
							<td>{properties.climate}</td>
							<td>{properties.terrain}</td>
							<td>{properties.surface_water}</td>
							</tr>
						</tbody>
						</table>
						
				</body>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</>
		);
};

PlanetView.propTypes = {
	match: PropTypes.object
};