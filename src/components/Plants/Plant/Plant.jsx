import React from 'react';
import { useState } from 'react';
import PlantResults from './PlantResults';

//const [plantName, setPlantName] = useState('');
let plantName = 'basil';
const key = '9QePtJRqe4GgPE067uVCYxcboJgs4Kj-Cec6-wrfwDE';
const baseUrl = `https://trefle.io/api/v1/plants?token=${key}`;
const searchUrl = `https://trefle.io/api/v1/plants/search?token=${key}&q=${plantName}`;

const Plant = () => {
    console.log(searchUrl);

    // fetch(searchUrl)
    // .then(res => res.json())
    // .then(data => console.log(data));

    return (
        <div>
            
        </div>
    )
}

export default Plant;

/*
TO DO:

Search Function:

Display Results Function:

Filter Function:

Sort Function:

Save Plant Function:

View User's Selection Function:

CRUD:



*/