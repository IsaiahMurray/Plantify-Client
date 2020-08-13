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

const PlantCreate = () => {
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
          />

          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Scientific Name"
          />
          <br />
          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Plant Family"
          />

          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Genus"
          />
          <br />
          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Image Url"
          />

          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Description"
          />
          <br />
          <TextField
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Extra notes"
          />
          <br />
          <Button id="submit-button" type="submit">
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
