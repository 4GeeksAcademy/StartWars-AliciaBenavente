import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/peopleView.css";



export const PeopleView = () => {
	const { store, actions } = useContext(Context);
	const [ properties, setProperties ] = useState("")
	const [character, setCharacter] = useState("");
	const  params = useParams();
	console.log(params);
	// const getDescription = actions.getCharacter();
	
	useEffect(()=> {
		// actions.getCharacter();

			fetch("https://www.swapi.tech/api/people/" + params.people_id)
			.then((response)=> response.json())
			.then((data)=> {
				console.log(data.result.properties);
				if(data.result && data.result.properties) {
				setCharacter(data.result)
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
							<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="img-fluid rounded-start" alt="Loading..."/>
						</div>
						<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{properties.name || "Loading..."}</h5>
							<p className="card-text">{character.description || "Loading description..."}</p>
							<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
						</div>
						</div>
					</div>
					</div>
				</div>
		
					<table className="table table-borderless table-dark text-center">
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
						
				</body>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</>
		);



// 	return (
// 		<>
// 			<div className="card mb-3 bg-secondary" style={{width: "80%", color: "white"}}>
// 			<div className="row g-0">
// 				<div className="col-md-4">
// 				<img src={rigoImage} className="img-fluid rounded-start" alt="..."/>
// 				</div>
// 				<div className="col-md-8">
// 				<div className="card-body">
// 					<h5 className="card-title">{character.properties.name}</h5>
// 					<p className="card-text">Description</p>
// 					<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
// 				</div>
// 				</div>
// 			</div>
// 			</div>
// 			<p></p>
// 			<p>Hair color: {character.properties.hair_color}</p>
// 			<p>Eye color: {character.properties.eye_color}</p>

// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					Back home
// 				</span>
// 			</Link>
// 		</>
// 	);
};

PeopleView.propTypes = {
	match: PropTypes.object
};