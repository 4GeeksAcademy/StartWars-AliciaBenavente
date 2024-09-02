import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PeopleView = () => {
	const { store, actions } = useContext(Context);
	const [ properties, setProperties ] = useState("")
	const [character, setCharacter] = useState("");
	const  params = useParams();
	
	useEffect(()=> {

			fetch("https://www.swapi.tech/api/people/" + params.people_id)
			.then((response)=> response.json())
			.then((data)=> {
				if(data.result && data.result.properties) {
				setCharacter(data.result)
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
							<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="img-fluid rounded-start" alt="Loading..."/>
						</div>
						<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{properties.name || "Loading..."}</h5>
							<p className="card-text">{character.description || "Loading description..."}</p>
						</div>
						</div>
					</div>
					</div>
				</div>
		
					<table className="table table-borderless table-dark text-center mt-4">
						<thead>
							<tr className="table-dark text-warning">
							<th scope="col"></th>
							<th scope="col">Gender</th>
							<th scope="col">Skin color</th>
							<th scope="col">Hair color</th>
							<th scope="col">Eye color</th>
							<th scope="col">Height</th>
							<th scope="col">Mass</th>
							<th scope="col">Birth year</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<th scope="row"></th>
							<td>{properties.gender}</td>
							<td>{properties.skin_color}</td>
							<td>{properties.hair_color}</td>
							<td>{properties.eye_color}</td>
							<td>{properties.height}</td>
							<td>{properties.mass}</td>
							<td>{properties.birth_year}</td>
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

PeopleView.propTypes = {
	match: PropTypes.object
};