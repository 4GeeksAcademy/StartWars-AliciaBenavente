import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

export const Character = (props) => {

    const { store, actions } = useContext(Context);

    return(
        <div className="characterCard me-4">
            <div className="card" style={{width: "18rem"}}>
                <img src={rigoImage} className="card-img-top" alt="..." />
                <div className="card-body">

                <h5 className="card-titl py-2">{props.name}</h5>
				<p className="card-text pb-2 d-flex flex-column">
					<span>Gender: {props.gender}</span>
					<span>Hair Color: {props.hair_color}</span>
					<span>Eye-Color: {props.eye_color}</span>
				</p>

                    
                    {/* <h5 className="card-title">{props.name}</h5>
                    <ul className="card-text"> */}
                        {/* <li><i className="swg swg-darthvader"></i></li> */}
                        {/* <li>Gender: {props.gender}</li>
                        <li>Hair color: {props.hair_color}</li>
                        <li>Eye color: {props.eye_color}</li>
                    </ul> */}
                    <Link to={"/peopleView/" + props.uid}>
                        <button className="btn btn-outline-primary">Learn more</button>
                    </Link>
                    <button className="btn btn-outline-warning">heart</button>
                </div>
            </div>
        </div>
    )
}