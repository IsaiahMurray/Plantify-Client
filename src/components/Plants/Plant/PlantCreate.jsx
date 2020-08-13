import React, { useState } from "react";
import PlantResults from "./PlantResults";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Plant.css";


const PlantCreate = (props) => {
    const [commonName, setCommonName] = useState('');
    const [family, setFamily] = useState('');
    const [familyCommonName, setFamilyCommonName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [genus, setGenus] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState('');
    //const [owner, setOwner] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://plantify-server.herokuapp.com/plant/create", {
          
          method: "POST",
          body: JSON.stringify({
            plant: { 
                commonName: commonName, 
                family: family,
                familyCommonName: familyCommonName,
                scientificName: scientificName,
                genus: genus,
                image: image,
                description: description,
                notes: notes,
                //owner: owner
             },
          }), 
          headers: new Headers({
            "Content-Type": "application/json", 
            "Authorization" : props.token
          })
        })
        .then(
          (response) => response.json() 
        )
        .then((data) => {
          console.log(data);
          setCommonName('');
          setFamily('');
          setFamilyCommonName('');
          setScientificName('');
          setGenus('');
          setImage('');
          setDescription('');
          setNotes('');
          //setOwner('');
        });
    };
    
  return (
    <Grid id="plant-create-container" container justify="center">
      <Grid id="plant-form">
        <Paper id="plant-form-paper">
          <h2>Add a Plant</h2>
          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            required
            type="text"
            label="Plant Name"
            onChange={(e) => setCommonName(e.target.value)}
          />

          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Scientific Name"
            onChange={(e) => setScientificName(e.target.value)}
          />
          <br />
          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Plant Family"
            onChange={(e) => setFamilyCommonName(e.target.value)}
          />

          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Genus"
            onChange={(e) => setGenus(e.target.value)}
          />
          <br />

          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Image Url"
            onChange={(e) => setImage(e.target.value)}
          />

          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Extra notes"
            onChange={(e) => setNotes(e.target.value)}
          />
          <br />
          <Button onClick={handleSubmit} id="submit-button" type="submit">
            Submit
          </Button>
          <br />
          <br />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PlantCreate;