import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';

const Signup = (props) => {
  //2
  const [email, setEmail] = useState(""); //3
  const [password, setPassword] = useState(""); //3

  let handleSubmit = (event) => {
    //4
    event.preventDefault();
    fetch("https://plantify-server.herokuapp.com/user/create", {
      //5
      method: "POST",
      body: JSON.stringify({
        user: { email: email, password: password },
      }), //6
      headers: new Headers({
        "Content-Type": "application/json", //7
      }),
    })
      .then(
        (response) => response.json() //8
      )
      .then((data) => {
        props.updateToken(data.sessionToken); //9
      });
  };

  return (
    <div>
      <form id="login-signup-form" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)} //10
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
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;

/*
1 => Our use of bootstrap is the same as in our Login component.  
Ultimately, these forms contain the same information, but differ only 
in their titles and the action they initiate with our server when a successful use 
account is made or processed

2 => We create a property(prop) called updateToken. This will allow us to pass the token down to our 
Signup function. This is not the same as the updateToken in the App.js component. It's a property that 
will be associated with a lower component, and it is named the same for clearly bridging the props 
through the unidirectional flow. These props are tethered to the props parameter in the parens above.
When we use the dot accessor on that props variable, we can use access the properties from App.js

3 => We have defined two functions in-line with our JSX.  Each of these functions 
is a callback responding to the onChange event listener we've inserted into the input fields, 
these callback functions are called by the event handler, not by us. These callback functions, 
being called within the onChange event handlers, are called with an 'event' object as an argument.  
This is default behavior to any event handler.  Digging into these event objects let us grab hold 
of the input data the user has typed.

4 =>  we're taking in an event, and we are preventing default, which in this instance will 
prevent our page from refreshing when we submit the form.

5 =>We're sending a fetch request to the endpoint determined in our server, that is where we go to signup

6 => we're including a body with our state information set as user. This again correlates to the backend. 
If your server is expecting information in this format: req.body.user.username and req.body.user.password, 
then the above will work. When making future applications this is what has to match what the backend is 
expecting. If the backend is expecting req.body.user.username and req.body.user.password and I send it 
req.body.spongebob.pineapple, it doesn't know how to handle that information.

7 => We're including the header Content-Type set to application/json. This let's our server know what type 
of information we are sending to it, so it can decide if it can handle it and what to do with it.

8 =>We're resolving the promise from fetch and calling .json(), allowing us to turn the 
response into JSON when it resolves.

9 => We're resolving the .json() promise, and taking the data we get back from the server and 
then calling our updateToken function with the sessionToken we get back in the data object.

10 => just like with our 'onChange' event handler built into the JSX, we are using an 'onSubmit' event 
handler in our Form bootstrap component.  The onSubmit handler will listen to and respond to a 'submit' 
even with our handleSubmit callback.  Notice again, that we don't use parentheses within the curly braces, 
because we aren't calling the callback functions ourselves--that's handled by the onSubmit handler.
*/

//{" "}
//{/* 10 */}
//{/* <InputLabel  htmlFor="username">Username</InputLabel >
//<Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/> */}
//{/* 2 */}
//{/* <InputLabel  htmlFor="password">Password</InputLabel > */}
//{/* <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/> */}
//{/* 2 */}
