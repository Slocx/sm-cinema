import React, { Fragment } from "react";
import data from "../films.json"

export const AfficheNewFilms =(props) => {


    return (
        <Fragment>
            <div>
                {
                  data.films.map((films, i) => {
                    return (
                        <div key={i}>
                            <p>Film numéro {films.id} :</p>
                            <p>{films.titre}</p>
                        </div>
                        );
                    })
                } 
            </div>
        </Fragment>
      );
}


export default AfficheNewFilms;