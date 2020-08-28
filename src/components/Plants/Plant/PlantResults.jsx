import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useState } from "react";


const PlantResults = (props) => {

  // ----------------------------------------------------------------------------------
  console.log(props)

  const handleSubmit = (plant) => {

    console.log('HS', plant)


    const plantObj = {
      commonName: plant.common_name,
      family: plant.family,
      familyCommonName: plant.family_common_name,
      scientificName: plant.scientific_name,
      genus: plant.genus,
      image: plant.image_url,
      description: 'plant.description',
      notes: 'plant.notes'
    }

    console.log(plantObj)

    fetch('https://plantify-server.herokuapp.com/plant/create', {
      method: 'POST',
      body: JSON.stringify({ plant: plantObj }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token
      }
    })

  }

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
                <Button type='submit' id="submit-button" onClick={() => handleSubmit(plant)}  >Save</Button>

              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlantResults;