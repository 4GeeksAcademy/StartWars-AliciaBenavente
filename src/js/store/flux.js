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
			
			// uniqueCharacter: [],
			characters: [],
			starships: [],
			planets: [],
			favorites: [],
			
		},
		actions: {
			
			addFavorite: (name) => {
                const store = getStore();
                const favorites = store.favorites.includes(name)
                    ? store.favorites.filter((item) => item !== name)
                    : [...store.favorites, name];
                setStore({ favorites });
            },


			// addFavorite: (name) => {
			// 	const store = getStore();
				
			// 	if(store.favorites.includes(name)){
			// 		console.log("está el elemento");
			// 		setStore({favorites: store.favorites.filter((favorite)=> favorite != name)})
			// 	} else {
			// 		setStore({favorites: [...store.favorites, name]})
			// 	}
			// },
			deleteFavorite: (index) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter((_, i) => i !== index);
                setStore({ favorites: updatedFavorites });
			},

			loadCharacterTest: (characterId) => {
				fetch(`https://www.swapi.tech/api/people/${characterId}`)
				.then((response) => response.json())
				.then((data) => data.result.properties)
			}
			,

			
			loadCharacters: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people/');
                    const data = await response.json();
                    const results = data.results;

                    const characters = [];
                    for (const result of results) {
                        const characterId = result.uid;
                        const characterResponse = await fetch(`https://www.swapi.tech/api/people/${characterId}`);
                        const characterData = await characterResponse.json();
                        characters.push(characterData.result);
                    }
                    setStore({ characters });
                    // localStorage.setItem('characters', JSON.stringify(characters)); 
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },

			characterByID: () => {
				// const store = getStore()
				fetch(`https://www.swapi.tech/api/people/`)
				.then((response) => response.json())
				.then((data) => { 
					const characterPromises = data.result.map((character) =>
					{return fetch(character.url)
						.then((response) => response.json())
						.then((details) => ({
							uid: details.result.uid,
							name: details.result.properties.name,
							gender: details.result.properties.gender,
							hair_color: details.result.properties.hair_color,
							eye_color: details.result.properties.eye_color,
						}))
					})
					return Promise.all(characterPromises)
					})
					.then((characters) => {
						dispatcher.dispatch({
							type: "SET_CHARACTERS",
							payload: characters,
						})})
					.catch((error) => console.error("Error fetching character properties", error))
				},
			

			// characterByID: (uid) => {
			// // const store = getStore()
			// fetch(`https://www.swapi.tech/api/people/${uid}`)
			// .then((response) => response.json())
			// .then((data) => { 
			// 	return data.result.properties, 
			// 	console.log("Character properties",data.result.properties)})
			// 	.catch((error) => console.error("Error fetching character properties", error))
			// },
			

			loadInitialData: () => {
							
			// const store = getStore();
			// fetch("https://www.swapi.tech/api/people/")
			// .then((response)=> response.json())
			// .then((data)=> setStore({ characters: data.results }),
			// 	console.log(store.characters)
			// )
			// .catch((error)=> console.error("Error", error))
			
			
			// fetch("https://www.swapi.tech/api/starships/")
			// .then((response)=> response.json())
			// .then((data)=> setStore({ starships: data.results }))
			// .catch((error)=> console.error("Error", error))
			
			// fetch("https://www.swapi.tech/api/planets/")
			// .then((response)=> response.json())
			// .then((data)=> setStore({ planets: data.results }))
			// .catch((error)=> console.error("Error", error))
				
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
