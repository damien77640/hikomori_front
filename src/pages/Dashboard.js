import React, {useEffect, useState} from "react";
import axios from "axios";
import DashboardTest from "./DashboardTest";

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
            {/* <DashboardTest/> */}
            <p>OK Boomer</p>
        </>
    )
}

export default Dashboard