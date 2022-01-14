import React, { Fragment, useState} from "react";
import propTypes from "prop-types";
import FormulaireFilms from "./FormulaireFilms";
import InfoFilm from "./InfoFilm";

export const AjouterFilms = (props)=>{
    const [ listFilms, setListFilms] = useState([]);

    const handleAjoutFilm = (film) =>{
        setListFilms([...listFilms, film])
    }

    const handleEffacer =(e)=> {
        e.stopPropagation();
        setListFilms([]);
    }

    return (
        <Fragment>
            {console.log(listFilms)}
            <div>
                {listFilms.map( (film, index) =>{
                    return (
                        <div key={index}>
                            <InfoFilm film={film}/>
                        </div>
                    )
                })}
            </div>
            <FormulaireFilms ajouterFilm={handleAjoutFilm}/>
            <button onClick={handleEffacer}> effacer </button>
        </Fragment>
    )
};

AjouterFilms.propTypes={
    listFilms : propTypes.array
};

export default AjouterFilms;