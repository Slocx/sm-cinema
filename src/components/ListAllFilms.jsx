import React, { Fragment } from "react";
import data from "../films.json"

export const ListAllFilms = (props)=>{

    return (
        <Fragment>
            <div>
                {
                  data.films.map((films) => {
                    return (
                        <div key={films.id}>
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

export default ListAllFilms;