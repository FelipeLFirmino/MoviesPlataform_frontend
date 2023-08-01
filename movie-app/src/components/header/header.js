import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";
import { Navbar } from "react-bootstrap";



const Header = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container fluid >
                <Navbar.Brand href="/" style={{"color": "gold"}}>
                    <FontAwesomeIcon icon={faVideoSlash}></FontAwesomeIcon>
                    GoldMovies
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>      
                </Nav>
                <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info">Register</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header