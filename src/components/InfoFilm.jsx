import React, { Fragment } from 'react';

export const InfoFilm =(props)=>{
    return(
        <Fragment>
            <div>
                Infos du Films ajouté :
                <ul>
                    Titre : 
                        <li>{props.film.titre}</li>
                    Description : 
                        <li>{props.film.description}</li>
                    Acteurs : 
                        <li>{props.film.acteurs}</li>
                    Durée :
                        <li>{props.film.duree}</li>
                </ul>
            </div>
        </Fragment>
    )
};

export default InfoFilm;