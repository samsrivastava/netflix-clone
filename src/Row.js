import React, { useState, useEffect } from 'react'

import axios from './axios';

function Row( { title, fetchUrl }) {
    const [movie, setMovies] = useState([]);


    useEffect(() => {
         async function fetchData(){
             const request = await axios.get(fetchUrl);
             console.log(request);
             setMovies(request.data.results);
             return request;
         }
         fetchData();
    }, [fetchUrl]);

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row
