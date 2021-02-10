import React, {useEffect, useState} from "react";
import axios from "axios";

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:5000")
            .then(response => {
                setData(response.data)
            })
    }, [])
    console.log("ceci est un test", data);
    return (
        <>
            <p>OK boomer</p>
        </>
    )
}

export default Dashboard