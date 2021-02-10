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
        }, [])
        console.log("choco " + data)

    return (

        <div>
            <header>
                <NavBar/>
            </header>
            
            { data.map((manga) => (
                <div class='w3-half w3-col s6'>
                    <Link to={"/manga/"+manga.id} class='dash_manga w3-container'>
                        <img className="img_manga w3-round-xlarge" src={manga.posterImageSmall} alt='image'></img>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Dashboard