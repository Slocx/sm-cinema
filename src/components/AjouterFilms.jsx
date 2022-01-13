import React, { Fragment, useState} from "react";
import propTypes from "prop-types";
import FormulaireFilms from "./FormulaireFilms";

export const AjouterFilms = (props)=>{
    const [ listFilms, setListFilms] = useState([]);

    const handleAjoutFilm = (film) =>{
        setListFilms([...listFilms, film])
    }

    return (
        <Fragment>
            {console.log(listFilms)}
            <FormulaireFilms ajouterFilm={handleAjoutFilm}/>
        </Fragment>
    )
};

AjouterFilms.propTypes={
    listFilms : propTypes.array
};

export default AjouterFilms;