import React, { Fragment } from "react";
import AfficheNewFilms from "../AfficheNewFilms";

export const Accueil = (props) => {
    return(
        <Fragment>
            <h1> Page Accueil</h1>
            <AfficheNewFilms/>
        </Fragment>
    )
};

export default Accueil;