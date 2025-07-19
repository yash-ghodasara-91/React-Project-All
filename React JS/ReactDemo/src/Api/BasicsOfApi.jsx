import React, { useEffect } from 'react'
import axios from "axios"; // ✅ axios is the default export


const BasicsOfApi = () => {

    useEffect(() => {
        apifatch()
    }, [])

    // const apifatch = async ()=>{
    //     let responce = await fetch("https://fakestoreapi.com/products");
    //     let data = await responce.json()
    //     console.log(data);  
    // }

    const apifatch = () => {
        axios.get("https://fakestoreapi.com/products").then((data) => {
                console.log(data.data);
            });
    }

    return (
        <div>
            <h1>Api Fatch</h1>
        </div>
    )
}

export default BasicsOfApi
