import React, { useState, useEffect } from 'react'

import axios from './axios';

function Row( { title, fetchURL }) {
    // const [movie, setMovies] = useState([]);


    useEffect(() => {
         async function fetchData(){
             const request = await axios.get(fetchURL);
             console.log(request);
            //  setMovies(request.data.results);
             return request;
         }
         fetchData();
    }, [fetchURL]);

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row
