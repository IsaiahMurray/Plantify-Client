import React, { useState } from 'react';
import PlantResults from './PlantResults';
import './Plant.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants';
// const key = '9QePtJRqe4GgPE067uVCYxcboJgs4Kj-Cec6-wrfwDE';
const key = 'U2UJDvUXm3lQGZyaFupZoAs9J_D8wNBWW0XRmOznJSg'

const PlantApp = (props) => {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [commonName, setCommonName] = useState('');
    const [family, setFamily] = useState('');
    const [familyCommonName, setFamilyCommonName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [genus, setGenus] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState('');

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

    const createSubmit = (e) => {
        console.log(e.target);
        
        setCommonName(results.commonName);
        setFamily('1');
        setFamilyCommonName('a');
        setScientificName('b');
        setGenus('c');
        setImage('1234')
        setDescription('d');
        setNotes('e');

        console.log(props.commonName)
        fetch('https://plantify-server.herokuapp.com/plant/create', {
            method: 'POST',
            body: JSON.stringify({ plant: { 'commonName': "mint", 'family': 'mint family', 'familyCommonName': 'minty', 'scientificName': 'a sciency name', 'genus': 'yes', 'image': 'an image', 'description': 'a good description', 'notes': 'my notes' } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            })
        }).then(res => res.json())
            .then(logData => {

                // let commonName = results.common_name;
                setCommonName('commonName');
                setFamily('1');
                setFamilyCommonName('a');
                setScientificName('b');
                setGenus('c');
                setImage('1234')
                setDescription('d');
                setNotes('e');
                //    newPlantData();
                // setCommonName(logData.commonName);
                // setFamily(logData.family);
                // setFamilyCommonName(logData.familyCommonName);
                // setScientificName(logData.scientificName);
                // setGenus(logData.genus);
                // setImage(logData.image)
                // setDescription('');
                // setNotes(''); 

          })
            
    }

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
                </div>
                <PlantResults handleSubmit={createSubmit} results={results} />

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

