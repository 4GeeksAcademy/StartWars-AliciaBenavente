import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Character } from "../component/character";
import { Planet } from "../component/planet";
import { Starship } from "../component/starship";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(()=>{
        actions.loadCharacters()
		actions.loadStarships()
		actions.loadPlanets()
     },[])

	return (
		<>
		<Navbar />
		<div className="container overflow-hidden">
			<h1 className="text-primary mt-4 mb-4">Characters</h1>
			<div className="row" style={{overflowX:"scroll", height:"700px"}}>
				<div className="characters d-inline-flex mb-5">
					{store.characters.map((character, index)=> (
					<div key={index}>
						<Character 
						name={character.properties.name} 
						uid={character.uid}
						gender={character.properties.gender}
						hair_color={character.properties.hair_color}
						eye_color={character.properties.eye_color}
						/>
						</div>
					))}
				</div>
			</div>

			<h1 className="text-primary mt-5 mb-4">Starships</h1>
			<div className="row" style={{overflowX:"scroll"}}>
				<div className="starships d-inline-flex mb-5">
					{store.starships.map((starship, index)=> (
					<div key={index}>
						<Starship 
						name={starship.properties.name} 
						uid={starship.uid}
						manufacturer={starship.properties.manufacturer}
						length={starship.properties.length}
						passengers={starship.properties.passengers}
						/>
						</div>
					))}
				</div>
			</div>

			<h1 className="text-primary mt-5 mb-4">Planets</h1>
			<div className="row" style={{overflowX:"scroll"}}>
				<div className="planets d-inline-flex mb-5">
					{store.planets.map((planet, index)=> (
					<div key={index}>
						<Planet
						name={planet.properties.name} 
						uid={planet.uid}
						rotation_period={planet.properties.rotation_period}
						orbital_period={planet.properties.orbital_period}
						climate={planet.properties.climate}
						/>
						</div>
					))}
				</div>
			</div>
		</div>
		<Footer />			
		</>
	)
};
