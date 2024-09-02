import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/character.css";

export const Character = (props) => {    
    const { store, actions } = useContext(Context);
    const [ isHovered, setIsHovered ] = useState(false);
    const [ colorChange , setColorChange ] = useState(false);
    const isFavorite = store.favorites.includes(props.name);
   

    const changeColor = () => {
        setColorChange(true)
        actions.addFavorite(props.name);
    };


    return(
        <div className="characterCard bg-black rounded-3 me-4 mt-3">
            <div className="cardPrincipal bg-black rounded-3" style={{width: "18rem"}}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top rounded-top" alt="Character Image" />
                <div className="card-body">
                <h5 className="card-title py-2">{props.name}</h5>
				<p className="card-text pb-2 d-flex flex-column">
					<span><strong>Gender: </strong>{props.gender}</span>
					<span><strong>Hair color: </strong>{props.hair_color}</span>
					<span><strong>Eye color: </strong>{props.eye_color}</span>
				</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/peopleView/" + props.uid}>
                        <button className="btn btn-outline-primary">Learn more</button>
                    </Link>

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