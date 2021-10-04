import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (

        <div className="header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#fighttofitness">Fight to Fitness</Navbar.Brand>
                    <Nav className="me-2px">
                        <NavLink className='nav' to="/home"> Home</NavLink>
                        <NavLink className='nav' to="/services"> Services</NavLink>
                        <NavLink className='nav' to="/about">About</NavLink>
                        <NavLink className='nav' to="/pricing">Pricing</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <div className="img-container">
                <Row className="header-details">
                    <Col>
                        <h1><span >Fight</span> To <br /> <span id="fitness">Fitness</span> </h1>
                        <h5>Choose your path & Grow your skill....</h5>
                    </Col>
                    <Col>
                        <img className="logo" src={logo} alt="" />
                    </Col>
                </Row>

            </div>
        </div>






    );
};

export default Header;