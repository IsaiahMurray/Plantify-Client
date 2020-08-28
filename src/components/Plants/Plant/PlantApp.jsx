import React, { useState } from 'react';
import PlantResults from './PlantResults';
import './Plant.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants';
// const key = '9QePtJRqe4GgPE067uVCYxcboJgs4Kj-Cec6-wrfwDE';
const key = 'U2UJDvUXm3lQGZyaFupZoAs9J_D8wNBWW0XRmOznJSg'

const PlantApp = (props) => {

    console.log('PLANTAPP: ', props)

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [plant, setPlant] = useState([]);
    const [commonName, setCommonName] = useState('mint');
    const [family, setFamily] = useState('mint');
    const [familyCommonName, setFamilyCommonName] = useState('mint');
    const [scientificName, setScientificName] = useState('mint');
    const [genus, setGenus] = useState('mint');
    const [image, setImage] = useState('mint');
    const [description, setDescription] = useState('mint');
    const [notes, setNotes] = useState('mint');

    const fetchSearchResults = () => {
        let url = `${baseUrl}/search?token=${key}&q=${search}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setResults(data.data);
            })
            .catch(err => console.log)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchSearchResults();
    }
useEffect(() => {

    const testPass = () => {
        console.log('TEST PASS:', commonName)
    }
    testPass()

},[plant])

    

    
    console.log(commonName)

    return (
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextField
                        id="plant-search"
                        placeholder="Search a Plant!"
                        variant="outlined"
                        type="text"
                        name="search"
                        onChange={(e) => setSearch(e.target.value)} />
                    <br />
                    <Button
                        id="submit-button"
                        type="submit"
                        color="primary"
                        variant="outlined"
                        className="submit">Submit Search</Button>
                </form>
                <div>
                    {/* <Button type="button" color="primary" onClick={(e) => createSubmit(e)}>WORK</Button> */}
                </div>
                <PlantResults token={props.token} results={results} />

            </div>
        </div>
    )
}

export default PlantApp;

/*
Next:
Filter Plants{
    create base url
    onCheck => add url section
    concatenate url
    return new url then fetch
}
*/

