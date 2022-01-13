import React, { Fragment } from "react";
import AjouterFilms from "../AjouterFilms";

export const AjoutFilms = (props) => {
    return(
        <Fragment>
            <h1> Page AjoutFilms </h1>
            <div>
                Ceci est la page AjoutFilms
            </div>
            <AjouterFilms/>
        </Fragment>
    )
};

export default AjoutFilms;