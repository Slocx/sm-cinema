import React, { Fragment } from "react";
import './App.css';
import Routing from "./Routing";


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