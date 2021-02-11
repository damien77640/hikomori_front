import React, {useEffect, useState} from "react";
import axios from "axios";
import '../css/Dashboard.css'
import NavBar from '../components/NavBar.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const path = "http://localhost:5000/manga"

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get(path)
            .then(response => {
                setData(response.data)
            })
        },
    [])
    // Parcours et créer l'affichage de chaque manga
    const Manga = () => {
        let lstManga = []
        let contenu
        data.map((manga) => {
            // permet de vérifier si le synopsis possède plus de 250 caractére
            if (manga.synopsis.length > 250){
                contenu = manga.synopsis.substr(0, 250) + '...'
            }
            // Affichage des images et du synopsis
            lstManga.push( 
                <div className='w3-half w3-col s6'>
                    <Link to={"/manga/" + manga.id} className='dash_manga w3-container'>
                        <img className="img_manga w3-round-xlarge" src={manga.posterImageSmall} alt='image'></img>
                        <div className="synopsis w3-hide-small w3-hide-medium">
                            {contenu}
                        </div>
                    </Link>
                </div>
                )
        })
        return lstManga
    }

    return (

        <div>
            <header>
                <NavBar/>
            </header>
            <div id="manga">
            {Manga()}
            </div>
        </div>
    )
}

export default Dashboard