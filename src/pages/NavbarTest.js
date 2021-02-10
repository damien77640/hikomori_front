import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const NavbarTest = () => {
    const [mangas, setMangas] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5000/manga")
            .then(response => {
                setMangas(response.data)
            })
    }, [])

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };
    useEffect(() => {
        const results = mangas.filter(manga =>
            manga.tittles_jap.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);

    return (
        <>
        <input type="text" placeholder="Add Mangas" value={searchTerm} onChange={handleChange}/>
            {searchTerm !== '' ? 
            <div>
            { searchResults.map((manga, i) => (
                <div>
                <Link to={"/manga/"+manga.id} >
             <img style={{position:"relative", width: "100px"}} src={manga.posterImageSmall} alt='image'></img>
             </Link>
             </div>
             )
            )}
            </div>
            :
            <div>
            { mangas.map((manga) => (
                <>
                <Link to={"/manga/"+manga.id} >
        <img style={{position:"relative", width: "100px"}} src={manga.posterImageSmall} alt='image'></img>
        </Link>
        </>
        ))}
            </div>
             }
        </>
    )
}

export default NavbarTest