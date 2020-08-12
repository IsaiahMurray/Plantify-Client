import React, {useState} from 'react';
import PlantResults from './PlantResults';
import './Plant.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const baseUrl = 'https://trefle.io/api/v1/plants';
const key = '9QePtJRqe4GgPE067uVCYxcboJgs4Kj-Cec6-wrfwDE';

const PlantApp = () => {

    const [ search, setSearch ] = useState('');
    const [ results, setResults ] = useState(null);

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
    return(
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
                    <br/>
                    <Button 
                    id="submit-button"
                    type="submit"
                    color="primary"
                    variant="outlined"
                    className="submit">Submit Search</Button>
                </form>
                <div>
                </div>
                <PlantResults results={results} />
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