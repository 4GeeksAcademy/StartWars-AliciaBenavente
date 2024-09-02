import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const StarshipView = () => {
	const { store, actions } = useContext(Context);
	const [ properties, setProperties ] = useState("")
	const [starship, setStarship] = useState("");
	const [ img, setImg ] = useState(`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`)
   
    const handleError = () => {
        setImg("https://i.pinimg.com/originals/52/bf/2a/52bf2a939a09817c7346df6a57b2f80e.gif");
    };

	const  params = useParams();
	console.log(params);
	
	useEffect(()=> {

			fetch("https://www.swapi.tech/api/starships/" + params.starship_id)
			.then((response)=> response.json())
			.then((data)=> {
				if(data.result && data.result.properties) {
				setStarship(data.result)
				setProperties(data.result.properties)
				}})
			.catch((error)=> console.error("Error", error))
		},[])

		return (
			<>
			
				<div className="row justify-content-evenly">
					<div className="card bg-secondary mt-5" style={{width: "90%", color: "white"}}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src={img} onError={handleError} className="img-fluid rounded-start" alt="Loading..."/>
						</div>
						<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{properties.name || "Loading..."}</h5>
							<p className="card-text">{starship.description || "Loading description..."}</p>
						</div>
						</div>
					</div>
					</div>
				</div>
		
					<table className="table table-borderless table-dark text-center mt-4">
						<thead>
							<tr className="table-dark text-warning">
							<th scope="col"></th>
							<th scope="col">Starship class</th>
							<th scope="col">Manufacturer</th>
							<th scope="col">Cost in credits</th>
							<th scope="col">Length</th>
							<th scope="col">Crew</th>
							<th scope="col">Passengers</th>
							<th scope="col">Max stmosphering speed</th>
							<th scope="col">Hyperdrive rating</th>
							<th scope="col">MGLT</th>
							<th scope="col">Cargo capacity</th>
							<th scope="col">Consumables</th>
							</tr>
						</thead>

						<tbody>
							<tr>
							<th scope="row"></th>
							<td>{properties.starship_class}</td>
							<td>{properties.manufacturer}</td>
							<td>{properties.cost_in_credits}</td>
							<td>{properties.length}</td>
							<td>{properties.crew}</td>
							<td>{properties.passengers}</td>
							<td>{properties.max_atmosphering_speed}</td>
							<td>{properties.hyperdrive_rating}</td>
							<td>{properties.MGLT}</td>
							<td>{properties.cargo_capacity}</td>
							<td>{properties.consumables}</td>
							</tr>
						</tbody>
						</table>
						
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</>
		);
};

StarshipView.propTypes = {
	match: PropTypes.object
};



