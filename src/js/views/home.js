import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Character } from "../component/character";
import { Planet } from "../component/planet";
import { Starship } from "../component/starship";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { useParams } from "react-router";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
		<>
		<Navbar />
		<div className="container overflow-hidden">
			<h1 className="text-primary mt-5 mb-4">Characters</h1>
			<div className="row" style={{overflowX:"scroll"}}>
				<div className="characters d-inline-flex mb-5">


					{store.characters.map((character)=> <Character 
					name={character.name} 
					key={character.uid}
					// gender={character.properties.gender}
                        // hair_color={character.properties.hair_color}
                        // eye_color={character.properties.eye_color}
                    uid={character.uid}
						/>)}
				</div>

			</div>
			<h1 className="text-primary mt-5 mb-4">Starships</h1>
			<div className="row" style={{overflowX:"scroll"}}>
				<div className="container starships d-inline-flex mb-5">
					{store.starships.map((starship)=> <Starship name={starship.name} key={starship.uid} uid={starship.uid}/>)}
				</div>
			</div>
			<h1 className="text-primary mt-5 mb-4">Planets</h1>
			<div className="row" style={{overflowX:"scroll"}}>
				<div className="container planets d-inline-flex mb-5">
					{store.planets.map((planet)=> <Planet name={planet.name} key={planet.uid} uid={planet.uid}/>)}
				</div>
			</div>
		</div>
		<Footer />			
		</>
	)
};
