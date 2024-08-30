import React, { useState } from "react";
import { useParams } from "react-router";
import { Character } from "../component/character";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			starships: [],
			planets: [],
			
		},
		actions: {
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// getCharacter: () => {
			// const [ properties, setProperties ] = useState("")
			// const [character, setCharacter] = useState("");
			// const params = useParams();
			// console.log(params);

			// fetch("https://www.swapi.tech/api/people/" + params.people_id)
			// .then((response)=> response.json())
			// .then((data)=> {
			// 	console.log(data.result.properties);
			// 	if(data.result && data.result.properties) {
			// 	setCharacter(data.result)
			// 	setProperties(data.result.properties)
			// 	}})
			// .catch((error)=> console.error("Error", error))},

			// getCharacter: () => {
			// 	fetch("https://www.swapi.tech/api/people/")
			// 	.then((response)=> {
			// 		if(!response.ok) {console.error("Error fetching character", error);
			// 		} else {return response.json()}})
			// 	.then((data)=> {})
			// 	.catch((error)=> console.error("Error fetching characters:", error))
			// },

			// getCharacter: () => {
			// 	fetch("https://www.swapi.tech/api/people/")
			// 	.then((response)=> response.json())
			// 	.then((data)=> {
			// 		const characterInfo = data.results;
			// 		const characterPromise = characterInfo.map(result=> {
			// 			const characterID = result.uid;
			// 			return fetch(`https://www.swapi.tech/api/people/${characterID}`)
			// 			.then((response)=> response.json())
			// 			.then((characterProperties)=> characterProperties.result)
			// 		})
			// 	Promise.all(characterPromise)
			// 	.then(characters => {
			// 		characters.sort((a, b) => a.uid - b.uid);
			// 		setStore({ characters });
			// 	})
			// 	.catch((error => {
			// 		console.error("Error fetching characters 1:", error)}))
			
			// })
			// 	.catch((error => {
			// 		console.error("Error fetching characters 2:", error)}))
			// },


			loadInitialData: () => {
				
				fetch("https://www.swapi.tech/api/people/")
				.then((response)=> response.json())
				.then((data)=> setStore({ characters: data.results }))
				.catch((error)=> console.error("Error", error))

				fetch("https://www.swapi.tech/api/starships/")
				.then((response)=> response.json())
				.then((data)=> setStore({ starships: data.results }))
				.catch((error)=> console.error("Error", error))

				fetch("https://www.swapi.tech/api/planets/")
				.then((response)=> response.json())
				.then((data)=> setStore({ planets: data.results }))
				.catch((error)=> console.error("Error", error))
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
