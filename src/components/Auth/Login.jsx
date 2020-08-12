import React, { useState } from "react";
//import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; //1
import TextField from "@material-ui/core/TextField"; //1
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';


const Login = (props) => {

  const [email, setEmail] = useState(""); //2
  const [password, setPassword] = useState(""); //2

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3002/api/login", {
      method: "POST",
      body: JSON.stringify({
        user: { email: email, password: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };
  return (
    <div>
      <form id="login-signup-form" onSubmit={handleSubmit}>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <br />
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          autoFocus
        />
        <br />
        <TextField
          variant="outlined"
          margin="normal"
          required
          label="Password"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
        />
        <br />
        <Button id="login-signup-button" type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;

/*
1 => We import lots of material-ui components, many of which are related to the bootstrap form

2 => We have created state variables 'username' and 'password' which will be fed information 
from the input fields in our form.  Even though we could grab the values of these input fields 
without using state variables, whenever manipulable information on your webpage is uncontrolled 
by React, it's an opportunity for bugs to arise in your program

3 => Notice that the value of the input fields is ultimately controlled by React, owing to 
point #2 above.  Because this component doesn't implement any use for setUsername or setPassword, 
the input fields will be stuck with no text inside, even if the user types in them.



    previous form
    <Form onSubmit={handleSubmit}>
                 <FormGroup>
                     <Label htmlFor="username">Username</Label>
                     <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/> 
                 </FormGroup>
                 <FormGroup>
                 <Label htmlFor="password">Password</Label>
                     <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/> 
                 </FormGroup>
                 <Button type="submit">Login</Button>
             </Form> 
*/
