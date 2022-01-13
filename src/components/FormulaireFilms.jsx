import React, { Fragment, useState } from "react";

export const FormulaireFilms =(props)=>{

    const [film, setFilm] = useState({
        titre:"",
        description:"",
        acteurs:"",
        duree:0
    })

    const handleChangeTitre = (e) =>{
        setFilm({
            ...film, titre:e.target.value
        })
    }

    const handleChangeDescription = (e) =>{
        setFilm({
            ...film, description:e.target.value
        })
    }

    const handleChangeActeurs = (e) =>{
        setFilm({
            ...film, acteurs:e.target.value
        })
    }

    const handleChangeDuree = (e) =>{
        setFilm({
            ...film, duree:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        props.ajouterFilm(film);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        titre :
                        <input name="titre" 
                        type="text"
                        onChange={handleChangeTitre} 
                        placeholder="entrer un titre"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        description :
                        <input name="description" 
                        type="text"
                        onChange={handleChangeDescription} 
                        placeholder="entrer une description"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        acteurs :
                        <input name="acteurs" 
                        type="text"
                        onChange={handleChangeActeurs} 
                        placeholder="entrer les acteurs"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        durée :
                        <input name="duree" 
                        type="number"
                        onChange={handleChangeDuree} 
                        placeholder="entrer une durée"
                        />
                    </label>
                </div>
                <button type="submit" value="submit"> Ajout du Film </button>   
            </form>
        </Fragment>
      );
}

export default FormulaireFilms;