import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const PlantResults = (props) => {
    const [commonName, setCommonName] = useState("");
    const [family, setFamily] = useState("");
    const [familyCommonName, setFamilyCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [genus, setGenus] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [notes, setNotes] = useState("");
    //const [owner, setOwner] = useState('');

  const savePlant = (plant) => {
    
    console.log(plant);

    let newPlantData = {
      plant: {
        commonName: plant.common_Name,
        family: plant.family,
        familyCommonName: plant.family_common_name,
        scientificName: plant.scientific_name,
        genus: plant.genus,
        image: plant.image_url,
      },
    };
    console.log("Plant data: ", newPlantData);

    fetch("https://plantify-server.herokuapp.com/plant/create", {
      method: "POST",
      body: JSON.stringify({
        newPlant: {
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
        Authorization: props.token,
      })
        .then((response) => {
          console.log(response.json());
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        }),
    });
  };
  return (
    <Grid container className="plants">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {props.results &&
            props.results.map((plant, index) => (
              <Grid className="plant" key={index}>
                <Paper>
                  <h2>Name: {plant.common_name}</h2>
                  <h3>Scientific Name: {plant.scientific_name}</h3>
                  <h2>Family Name: {plant.family_common_name}</h2>
                  <img
                    height="200px"
                    width="200px"
                    alt={plant.common_name}
                    src={plant.image_url}
                  />
                </Paper>
                <Button id="submit-button" onClick={() => savePlant(plant)}>
                  Save
                </Button>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlantResults;
