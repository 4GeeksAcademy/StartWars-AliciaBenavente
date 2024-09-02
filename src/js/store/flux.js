
const getState = ({ getStore, getActions, setStore }) => {
	const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
    const storedPlanets = JSON.parse(localStorage.getItem('planets')) || [];
    const storedStarships = JSON.parse(localStorage.getItem('starships')) || [];
	
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
			
			characters: storedCharacters,
			starships: storedStarships,
			planets: storedPlanets,
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

			deleteFavorite: (index) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter((_, i) => i !== index);
                setStore({ favorites: updatedFavorites });
			},


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
                    localStorage.setItem('characters', JSON.stringify(characters)); 
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },

			loadStarships: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/starships/');
                    const data = await response.json();
                    const results = data.results;

                    const starships = [];
                    for (const result of results) {
                        const starshipId = result.uid;
                        const starshipResponse = await fetch(`https://www.swapi.tech/api/starships/${starshipId}`);
                        const starshipData = await starshipResponse.json();
                        starships.push(starshipData.result);
                    }
                    setStore({ starships });
                    localStorage.setItem('starships', JSON.stringify(starships)); 
                } catch (error) {
                    console.error("Error fetching starships:", error);
                }
            },

			loadPlanets: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets/');
                    const data = await response.json();
                    const results = data.results;

                    const planets = [];
                    for (const result of results) {
                        const planetId = result.uid;
                        const planetResponse = await fetch(`https://www.swapi.tech/api/planets/${planetId}`);
                        const planetData = await planetResponse.json();
                        planets.push(planetData.result);
                    }
                    setStore({ planets });
                    localStorage.setItem('planets', JSON.stringify(planets)); 
                } catch (error) {
                    console.error("Error fetching starships:", error);
                }
            },	
		},
	};
};

export default getState;
