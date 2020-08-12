import React, { useState } from 'react';
//import {Container, Row, Col} from 'reactstrap'; //1
import Signup from './Signup';
import Login from './Login';
import './Auth.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

const Auth = (props) => { //2
    const [login, setLogin] = useState(true);
    const title = () => {
        return login ? 'Login' : 'Signup'
    }

    const loginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);
    }

    const signupFields = () => !login ? 
    (
        
        <Grid id="login-signup" item xs={12} sm={6}>
            <h2>{title()}</h2>
            <Signup updateToken={props.updateToken}/>
        </Grid>
    ) : ( 
        <Grid id="login-signup" item xs={12} sm={6} className="login-col">
            <h2>{title()}</h2>
            <Login updateToken={props.updateToken}/>
        </Grid>
    );

    return(
        <Container className="auth-container">
            <Grid
            id="login-signup-grid"
            className="auth-grid"
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
                {signupFields()}
                <br/>
            </Grid>
            <Button id="toggle-button" onClick={loginToggle}>{!login ? 'Login' : 'Signup'}</Button>
        </Container>
    )
}

export default Auth;

/*
1 => We are importing all of the Bootstrap tools that allow us to use its grid system

2 =>We are creating a functional component. It has no state, and it will simply pull in the props that will be passed down eventually.  
Currently, this component is basically going to hold our login and signup forms side by side. 
*/