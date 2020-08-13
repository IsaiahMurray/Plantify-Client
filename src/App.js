import React, { useState, useEffect } from 'react';
import './App.css';
import Sitebar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Plants from './components/Plants/Plant/PlantCreate';
import PlantApp from './components/Plants/Plant/PlantApp';
import Landing from './components/LandingPage/Landing';
import PlantCreate from './components/Plants/Plant/PlantCreate';

function App() {
  const [sessionToken, setSessionToken] = useState(''); //1

  useEffect(() => { //2
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => { //3
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <PlantApp token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }

  return (
    <div>
      <Sitebar clickLogout={clearToken}/>
      {protectedViews()}
      <PlantApp/>
      {/* <PlantCreate/> */}
    </div>
  );
}

export default App;

/* 
1 => We are using the useState hook to create a new state variable, sessionToken. 
Because our sessionToken will change during the course of our app running 
(it will start empty, be given a value upon logging in, then emptied upon logout), 
we also use the second argument of useState, which allows us to change our sessionToken state variable.

2 => We have an effect that runs once upon initial component load.  It updates 
our sessionToken state variable if Chrome has saved a sessionToken in localStorage.  
Because we pass an empty array as a second argument, there is no change our effect is 
tracking to re-run later, so the effect runs only upon initial component load.

3 => This function takes in a token (we'll use this function later in a component 
that will grab the sessionToken after an API call) and saves it two places--both in 
our localStorage and in our state variable, sessionToken.  The localStorage is a secure 
place to store this data, and will persist as long as our browser is open.  The state 
variable allows child components to quickly access the sessionToken for use.
*/