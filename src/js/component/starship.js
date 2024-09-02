import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/starship.css";

export const Starship = (props) => {
  
    const { store, actions } = useContext(Context);

    const [ isHovered, setIsHovered ] = useState(false);
    const [ colorChange , setColorChange ] = useState(false);
    const isFavorite = store.favorites.includes(props.name);
    const [ img, setImg ] = useState(`https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`)
   
    const handleError = () => {
        setImg("https://i.pinimg.com/originals/52/bf/2a/52bf2a939a09817c7346df6a57b2f80e.gif");
    };

    const changeColor = () => {
        setColorChange(true)
        actions.addFavorite(props.name);
    };

    return(
        <div className="starshipCard bg-black rounded-3 me-4 mt-3">
            <div className="cardPrincipal bg-black rounded-3" style={{width: "18rem"}}>
                <img src={img} onError={handleError}className="card-img-top" alt="Starship Image" />
                <div className="card-body">

                <h5 className="card-title py-2">{props.name}</h5>
				<p className="card-text pb-2 d-flex flex-column">
					<span><strong>Manufacturer: </strong>{props.manufacturer}</span>
					<span><strong>Length: </strong>{props.length}</span>
					<span><strong>Passengers: </strong>{props.passengers}</span>
				</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/starshipsView/" + props.uid}>
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