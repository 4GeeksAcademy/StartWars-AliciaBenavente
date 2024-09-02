import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [ inputValue, setInputValue ] = useState ("");
	const [ suggestion, setSuggestion ] = useState([])
	const [ highlightedIndex, setHighlightedIndex ] = useState(-1);
	const findCharacter = store.characters.find(character=> character.properties.name)
	const findStarship = store.starships.find(starship=> starship.properties.name)
	const findPlanet = store.planets.find(planet=> planet.properties.name)

	const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            Search(inputValue);
        } else if (event.key === "ArrowDown") {
			setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, suggestion.length - 1))
		} else if (event.key === "ArrowUp") {
			setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, -1));
		}
    };

	const handleSuggestionClick = (value) => {
		setInputValue(value.properties.name); // Set input value to the selected suggestion
		navigateToItem(value);
	};

	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
		setHighlightedIndex(-1);

		const filteredSuggestions = [
			...store.characters.filter(character => character.properties.name.includes(value)),
			...store.starships.filter(starship => starship.properties.name.includes(value)),
			...store.planets.filter(planet => planet.properties.name.includes(value))
		]
		setSuggestion(filteredSuggestions);
		if(value.trim() === "") {
			setSuggestion([])
		}
	};

	const Search = (item) => {
		const foundItem = suggestion.find(s => s.properties.name === item);
		if (foundItem) {
			navigateToItem(foundItem);
		} else {
			alert("This is not the result you are looking for...");
		};

		const navigateToItem = (item) => {
		if (findCharacter === item) {
			console.log(findCharacter)
			navigate(`/peopleView/${findCharacter.uid}`)
			console.log(item.uid)
			console.log(findCharacter)
		} else if (findStarship === item) {
			navigate(`/starshipsView/${findStarship.uid}`)
		} else if (findPlanet === item) {
			navigate(`/planetsView/${findPlanet.uid}`)
		} else {
			return (
				// <ToastContainer
				// position="top-center"
				// autoClose={5000}
				// hideProgressBar={false}
				// newestOnTop={false}
				// closeOnClick
				// rtl={false}
				// theme="dark"
				
				// />
				alert("This is not the result you are looking for...")
			)
		}
	}}

	return (
		<nav className="navbar bg-dark sticky-top mb-3 justify-content-around">
			<Link to="/">
				<img className="navbar-brand mb-0" width={100} height={"auto"} src={"https://i.pinimg.com/originals/c7/7c/11/c77c11c6c03ff5c4f2d250e893ca615f.png"}></img>
			</Link>

{/* input styled */}
			<div className="grid"></div>
			<div id="poda">
			<div className="glow"></div>
			<div className="darkBorderBg"></div>
			<div className="darkBorderBg"></div>
			<div className="darkBorderBg"></div>

			<div className="white"></div>

			<div className="border"></div>

			<div id="main">
				<input placeholder="Type your search, and may the force be with you" 
				type="text" name="text" className="input" 
				onKeyDown={handleKeyDown} 
				onChange={handleInputChange} 
				// como hacer que el input lea el item de la lista seleccionado y cargar la selección
				value={inputValue} />
				{suggestion.length > 0 && (
						<ul className={`dropdown-menu dropdown-menu-dark ${suggestion.length > 0 ? 'show' : ''}`}>
							{suggestion.map((value, index) => (
								<li className="dropdown-item bg-body-secondary-subtle" key={index}
								style={{ cursor: 'pointer' }}
								onKeyDown={handleKeyDown}
								onClick={() => handleSuggestionClick(value)}>
									{value.properties.name}
								</li>
							))}
						</ul>
				)}
				{/* <div id="input-mask"></div> */}
				<div id="pink-mask"></div>
				<div className="filterBorder"></div>
				<div id="filter-icon">
				<svg
					preserveAspectRatio="none"
					height="27"
					width="27"
					viewBox="4.8 4.56 14.832 15.408"
					fill="none"
				>
					<path
					d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
					stroke="#d6d6e6"
					strokeWidth="1"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
					></path>
				</svg>
				</div>
				<div id="search-icon" onClick={() => Search(inputValue)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					viewBox="0 0 24 24"
					strokeWidth="2"
					strokeLinejoin="round"
					strokeLinecap="round"
					height="24"
					fill="none"
					className="feather feather-search"
				>
					<circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
					<line
					stroke="url(#searchl)"
					y2="16.65"
					y1="22"
					x2="16.65"
					x1="22"
					></line>
					<defs>
					<linearGradient gradientTransform="rotate(50)" id="search">
						<stop stopColor="#f8e7f8" offset="0%"></stop>
						<stop stopColor="#b6a9b7" offset="50%"></stop>
					</linearGradient>
					<linearGradient id="searchl">
						<stop stopColor="#b6a9b7" offset="0%"></stop>
						<stop stopColor="#837484" offset="50%"></stop>
					</linearGradient>
					</defs>
				</svg>
				</div>
			</div>
			</div>
			
{/* input styled */}

			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
						Favorites <span className="badge bg-light text-primary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">

					{store.favorites.length === 0 ? (
						<li className="dropdown-item">(empty... but Vader is the best ;)</li>
					) : (
						store.favorites.map((favorite,index) => (
							<li className="dropdown-item"  style={{width:"280px"}} key={index}>{favorite}<button className="border-0 bg-transparent float-end pb-1" onClick={()=> actions.deleteFavorite(index)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="icon bi bi-trash" viewBox="0 0 16 16">
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
