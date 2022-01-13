import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./NavBar";
import Accueil from "../pages/Accueil";
import ListFilms from "../pages/ListFilms";
import DetailsFilm from "../pages/DetailsFilm";
import AjoutFilms from "../pages/AjoutFilms";

let pages = [
    {
        to:"/accueil",
        nom:"Accueil"
    },
    {
        to:"/listfilms",
        nom:"Liste des Films"
    },
    {
        to:"/ajoutfilms",
        nom:"Ajout de Films"
    },
    {
        to:"/detailsfilm",
        nom:"Détails des Films"
    },
]

export const Routing = (props) => {
    return(
        <Fragment>
            <Router>
                <NavBar pages={pages}/>
                <Routes>
                    
                    <Route path="/accueil" element={<Accueil/>} />
                    <Route path="/listfilms" element={<ListFilms/>} />
                    <Route path="/ajoutfilms" element={<AjoutFilms/>} />   
                    <Route path="/detailsfilm" element={<DetailsFilm/>} />
                    <Route path="/" element={<Navigate to="/accueil" />}/>
                    <Route path="*" element={<Navigate to="/accueil" />}/>
                </Routes>
            </Router>
        </Fragment>
    )
};

export default Routing;