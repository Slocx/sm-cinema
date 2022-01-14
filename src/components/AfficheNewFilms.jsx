import React, { Fragment } from "react";
import data from "../films.json"

export const AfficheNewFilms =(props) => {

    return (
        <Fragment>
            {/* A Modifier avec une function Callback ? */}
            <div>
                {
                  data.films.map((films) => {
                    if (films.id <= 3) {
                        return (
                            <div key={films.id}>
                                <p>Film numéro {films.id} :</p>
                                <p>{films.titre}</p>
                            </div>
                            )
                        }
                    })
                } 
            </div>
        </Fragment>
      );
}


export default AfficheNewFilms;