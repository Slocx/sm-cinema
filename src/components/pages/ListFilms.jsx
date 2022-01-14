import React, { Fragment } from "react";
import ListAllFilms from "../ListAllFilms";

export const ListFilms = (props) => {
    return(
        <Fragment>
            <h2> Page ListFilms</h2>
            <div>
                <ListAllFilms/>
            </div>
            
        </Fragment>
    )
};

export default ListFilms;