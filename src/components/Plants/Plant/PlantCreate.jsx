import React, { useState } from "react";
import PlantResults from "./PlantResults";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import "./Plant.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";



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

      let plant = JSON.stringify({ 
        commonName: commonName, 
        family: family,
        familyCommonName: familyCommonName,
        scientificName: scientificName,
        genus: genus,
        image: image,
        description: description,
        notes: notes
        //owner: owner
      })
      
        event.preventDefault();
        fetch("https://plantify-server.herokuapp.com/plant/create", {
          
          method: "POST",
          body: plant,
            
             
          headers: {
            "Content-Type": "application/json", 
            "Authorization" : props.token,
          }
        })
        .then( (response) => console.log(response) )
        .catch(error=> console.log(error))
        
        // .then((data) => {
        //   console.log(data);
        //   setCommonName('data.commonName');
        //   setFamily('data.Family');
        //   setFamilyCommonName('a');
        //   setScientificName('a')
        //   setImage('a');
        //   setDescription('a');
        //   setNotes('a');
        //   //setOwner('');
        //   // props.plantCreate();
        // });
    };
    
  return (

    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <br/>
          <Input
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            required
            type="text"
            label="Plant Name"
            value={commonName}
            onChange={(e) => setCommonName(e.target.value)}
          />
          <br/>
          <Input
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Scientific Name"
            value={scientificName}
            onChange={(e) => setScientificName(e.target.value)}
          />
          <br/>
          <Input
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Plant Family"
            value={familyCommonName}
            onChange={(e) => setFamilyCommonName(e.target.value)}
          />
          <br/>
          <Input
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Genus"
            value={genus}
            onChange={(e) => setGenus(e.target.value)}
          />
          <br/>
          <Input
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Image Url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br/>
          <Input
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br/>
          <Input
            className="plant-create-input"
            variant="outlined"
            margin="normal"
            type="text"
            label="Extra notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <br/>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>







    // <Grid id="plant-create-container" container justify="center">
    //   <Grid onSubmit={handleSubmit}  id="plant-form">
    //     <Paper id="plant-form-paper">
    //       <h2>Add a Plant</h2>
    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         type="text"
    //         label="Plant Name"
    //         value={commonName}
    //         onChange={(e) => setCommonName(e.target.value)}
    //       />
    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Scientific Name"
    //         value={scientificName}
    //         onChange={(e) => setScientificName(e.target.value)}
    //       />
    //       <br />
    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Plant Family"
    //         value={familyCommonName}
    //         onChange={(e) => setFamilyCommonName(e.target.value)}
    //       />
    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Genus"
    //         value={genus}
    //         onChange={(e) => setGenus(e.target.value)}
    //       />
    //       <br />
    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Image Url"
    //         value={image}
    //         onChange={(e) => setImage(e.target.value)}
    //       />
    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Description"
    //         value={description}
    //         onChange={(e) => setDescription(e.target.value)}
    //       />
    //       <br />
    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Extra notes"
    //         value={notes}
    //         onChange={(e) => setNotes(e.target.value)}
    //       />
    //       <br />
    //       <Button  id="submit-button" type="submit">
    //         Submit
    //       </Button>
    //       <br />
    //       <br />
    //     </Paper>
    //   </Grid>
    // </Grid>
    // <Grid id="plant-create-container" container justify="center">
    //   <Grid id="plant-form">
    //     <Paper id="plant-form-paper">
    //       <h2>Add a Plant</h2>
    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         type="text"
    //         label="Plant Name"
    //         onChange={(e) => setCommonName(e.target.value)}
    //       />

    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Scientific Name"
    //         onChange={(e) => setScientificName(e.target.value)}
    //       />
    //       <br />
    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Plant Family"
    //         onChange={(e) => setFamilyCommonName(e.target.value)}
    //       />

    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Genus"
    //         onChange={(e) => setGenus(e.target.value)}
    //       />
    //       <br />

    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Image Url"
    //         onChange={(e) => setImage(e.target.value)}
    //       />

    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Description"
    //         onChange={(e) => setDescription(e.target.value)}
    //       />
    //       <br />
    //       <TextField
    //         className="plant-create-input"
    //         variant="outlined"
    //         margin="normal"
    //         type="text"
    //         label="Extra notes"
    //         onChange={(e) => setNotes(e.target.value)}
    //       />
    //       <br />
    //       <Button onClick={handleSubmit} id="submit-button" type="submit">
    //         Submit
    //       </Button>
    //       <br />
    //       <br />
    //     </Paper>
    //   </Grid>
    // </Grid>
  );
};

export default PlantCreate;