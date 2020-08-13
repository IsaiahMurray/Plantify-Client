import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useState } from "react";
// import Plant from "../../../../../../server/Plantify-Server/server/controllers/plantcontroller";

const PlantResults = (props) => {
  

  // console.log('plantResults',props.results[0]);

  const savePlant = (plant) => {
    console.log(plant);

    // let plantId = plant.id;
    // let commonName = plant.common_name;
    // let family = plant.family;
    // let familyCommonName = plant.family_common_name;
    // let scientificName = plant.scientificName;
    // let genus = plant.genus;
    // let image = plant.image_url;
    // let owner = user.id;
    const accessToken = localStorage.getItem("token");

    let newPlantData = {
      plant: {
        // id: plant.id,
        commonName: plant.common_name,
        family: plant.family,
        familyCommonName: plant.family_common_name,
        scientificName: plant.scientific_name,
        genus: plant.genus,
        image: plant.image_url,
        description: plant.description,
        notes: plant.notes
      },
    };
    console.log('Plant data: ', newPlantData);

    fetch("https://plantify-server.herokuapp.com/plant/create", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": accessToken,
      }),
      body: JSON.stringify(newPlantData),
    })
      .then((response) => {
        console.log(response.json());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ----------------------------------------------------------------------------------
  // const handleSubmit = (e) => {
  //   // e.prevent.default();
  //   fetch('https://plantify-server.herokuapp.com/plant/create', {
  //     method: 'POST',
  //     body: JSON.stringify({plant:{commonName: commonName, family:family, familyCommonName: familyCommonName, scientificName:scientificName, genus:genus, description:description, notes: notes}}),
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Authorization': localStorage.getItem('token'),
  //     })
  //   }).then(res => res.json())
  //     // .then(logData => {
  //     //   console.log(logData);
  //     //   setCommonName(plant.common_name);
  //     //   setFamily(plant.family);
  //     //   setFamilyCommonName(plant.family_common_name);
  //     //   setScientificName(plant.scientific_name);
  //     //   setGenus(plant.genus);
  //     //   setDescription(plant.description);
  //     //   setNotes(plant.notes);
  //     //   // props.newPlantData();
  //     // })

  // }

  // ----------------------------------------------------------------------------------

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
                <Button type='submit' id="submit-button" onClick={props.handleSubmit}>Save</Button>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlantResults;