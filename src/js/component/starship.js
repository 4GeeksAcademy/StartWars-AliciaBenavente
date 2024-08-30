import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

// tarjetas de la naves
export const Starship = (props) => {
    return(
        <div className="characterCard overflow-x-auto me-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={rigoImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <ul className="card-text">
                        {/* <li><i className="swg swg-darthvader"></i></li> */}
                        <li>Gender</li>
                        <li>Hair color</li>
                        <li>Eye-color</li>
                    </ul>
                    <Link to={"/starshipsView/"+props.uid}>
                        <button className="btn btn-outline-primary">Learn more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}