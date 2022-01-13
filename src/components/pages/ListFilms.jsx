import React, { Fragment } from "react";
import ListAllFilms from "../ListAllFilms";

export const ListFilms = (props) => {
    return(
        <Fragment>
            <h1> Page ListFilms</h1>
            <div>
                <ListAllFilms/>
            </div>
            
        </Fragment>
    )
};

export default ListFilms;