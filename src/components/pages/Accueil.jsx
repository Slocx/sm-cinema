import React, { Fragment } from "react";
import AfficheNewFilms from "../AfficheNewFilms";

export const Accueil = (props) => {
    return(
        <Fragment>
            <h2> Page Accueil</h2>
            <h2> Les Trois Films à l'Affiche : </h2>
            <AfficheNewFilms/>
        </Fragment>
    )
};

export default Accueil;