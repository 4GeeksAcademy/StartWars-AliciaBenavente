import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const PlanetsView = () => {
	const { store, actions } = useContext(Context);

	return (
		<h1>PlanetsView</h1>
    )
};