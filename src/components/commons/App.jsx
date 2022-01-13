// faire l'import de react
import React, { Fragment } from "react";
import './App.css';
import Routing from "./Routing";

// Créer la classe composant
export class App extends React.Component{
    render(){
        return (
            <Fragment>
                <Routing/>
            </Fragment>
        );
    };
};

export default App;