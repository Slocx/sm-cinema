import React, { Fragment} from "react";
import data from "../films.json"

export const DescriptionFilm = (props)=>{

    return (
        <Fragment>

            <div>
                {
                  data.films.map((films, i) => {
                    return (
                        <div key={i}>
                            <p>Film numéro {films.id} :</p>
                            <p>{films.titre}</p>
                            <p>{films.body}</p>
                            <p>{films.acteurs}</p>
                            <p>{films.duree}</p>
                        </div>
                    );
                  })
                } 
            </div>
        </Fragment>
      );
}

export default DescriptionFilm;