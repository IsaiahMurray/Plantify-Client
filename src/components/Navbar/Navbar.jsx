import React, { useState } from "react";
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlantIndex from '../Plants/Plant/PlantIndex';






//import MenuIcon from '@material-ui/icons/Menu';

const SiteBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <>
{/* <PlantIndex/> */}
      <AppBar id="app-bar" position="static">
        {/* <Link to="/PlantIndex">My Plants</Link>
        <Switch>
          <Route exact path="/PlantIndex"><PlantIndex /></Route>
        </Switch> */}

          <Toolbar>
          <IconButton
            edge="start"
            className=""
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6">
            Plantify
        </Typography>
          <Button id="logout-button" onClick={props.clickLogout}>Logout</Button>
        </Toolbar>

        <Button onClick={props}>My Plants</Button>
      </AppBar>

      {/* // <Navbar color="faded" light expand="md">
    //     <NavbarBrand href="/">Plantify</NavbarBrand>
    //     <NavbarToggler onClick={toggle}/>
    //     <Collapse isOpen={isOpen} navbar>
    //         <Nav className="ml-auto" navbar>
    //             <NavItem>
    //                 <Button onClick={props.clickLogout}>Logout</Button>
    //             </NavItem>
    //         </Nav>
    //     </Collapse>
    // </Navbar> */}
    </>
  );
};

export default SiteBar;
