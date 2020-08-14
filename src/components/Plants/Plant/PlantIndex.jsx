import React,{useState} from 'react';
import PlantResults from "./PlantResults";
import PlantCreate from "./PlantCreate";
import { Container, Row, Col } from "reactstrap";
import { useEffect } from 'react';

const GetPlants = (props) => {
    const [commonName, setCommonName] = useState('');
    const [family, setFamily] = useState('');
    const [familyCommonName, setFamilyCommonName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [genus, setGenus] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState('');

const getSubmit = () =>{

    fetch('https://plantify-server.herokuapp.com/plant/', {

        method: "GET",
       
        headers: new Headers({
            "Content-Type": "application/json",
            // "Authorization": props.token
        })
    })
        .then(
            (response) => response.json()
        )
        .then((data) => {
            console.log(data);
            // setCommonName(data);
            // setFamily(data);
            // setFamilyCommonName('');
            // setScientificName('');
            // setGenus('');
            // setImage('');
            // setDescription('');
            // setNotes('');
            //setOwner('');
            // props.plantCreate();

        });
    };
    // useEffect(()=>{
    //     getSubmit();
    // },[])
    return (

        <>

test
<Container>
      <Row>
        <Col md="3">
          <GetPlants getSubmit={getSubmit} />   
        </Col>
    
      </Row>
    </Container>


        </>

    )

}

export default GetPlants;
// token={props.token} 
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Paper from "@material-ui/core/Paper";
// import TextField from "@material-ui/core/TextField";

{/* <Form onSubmit={getSubmit}>
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
          {/*  */}
    //       <br/>
    //     </FormGroup>
    //     <Button type="submit">Submit</Button>
    //   </Form> */}

{/* <Input
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
          /> */}
           // body: JSON.stringify({

        //     // plant: {

        //     //     commonName: commonName,
        //     //     family: family,
        //     //     familyCommonName: familyCommonName,
        //     //     scientificName: scientificName,
        //     //     genus: genus,
        //     //     image: image,
        //     //     description: description,
        //     //     notes: notes,
        //     //     //owner: owner
        //     // },
        // }),