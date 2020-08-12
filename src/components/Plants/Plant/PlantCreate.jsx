import React, { useState }  from 'react';
import PlantResults from './PlantResults';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";


const PlantCreate = () => {

    return (
        <Grid container justify="center">
            <Grid id="plant-form">
                <Paper>
                    <h2>Add a Plant</h2>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default PlantCreate;

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