import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

export const Character = (props) => {
    console.log("Props from CharacterCard",props);
    
    const { store, actions } = useContext(Context);
    // const character = store.uniqueCharacter;
    const [ isHovered, setIsHovered ] = useState(false);
    const [ colorChange , setColorChange ] = useState(false);
    const isFavorite = store.favorites.includes(props.name);
   
    // const buttonStyle = {
    //     border: `1px solid ${colorChange ? 'yellow' : 'red'}`,
    //     background: 'transparent',
    //     cursor: 'pointer',
    // };

    const changeColor = () => {
        // event.stopPropagation();
        setColorChange(true)
        actions.addFavorite(props.name);
    };

    // const changeColor = () => {
        
    //     if(colorChange === false) {
    //         setColorChange(true)
    //         actions.addFavorite(props.name)
    //     } 
    //     else {
    //         setColorChange(false)
    //     }
    // };
    

    return(
        <div className="characterCard me-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="Character Image" />
                <div className="card-body">

                <h5 className="card-title py-2">{props.name}</h5>
				<p className="card-text pb-2 d-flex flex-column">
					<span>Gender: {props.gender}</span>
					<span>Hair Color: {props.hair_color}</span>
					<span>Eye-Color: {props.eye_color}</span>
				</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/peopleView/" + props.uid}>
                        <button className="btn btn-outline-primary">Learn more</button>
                    </Link>
                    
                    {/* <button className="btn btn-outline-warning" style={buttonStyle} onClick={()=>changeColor()} >
                    {!colorChange ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heartbreak text-danger" viewBox="0 0 16 16">
                    <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38 38 0 0 0 .867-.59m-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922m-1.25 1.137a36 36 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z"/>
                    </svg>) : (<svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>) }
                    </button> */}

                    <button className={`${isFavorite ? "btn btn-outline-warning" : "btn btn-outline-danger"}`} onClick={()=>changeColor()} 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <i className={`${isFavorite ? "fa-solid fa-heart" : `${isHovered ? "fa-solid fa-heart-crack text-white fs-1" : "fa-solid fa-heart-crack text-danger fs-1"}}`}`}></i>
                    </button>
                    
                    
                </div>
                </div>
            </div>
        </div>
    )
}