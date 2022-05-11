import React from 'react';
import {Link} from 'react-router-dom'
import Signin from "./examples/Signin";
import { Col, Row, Form, Card, Button, Container, InputGroup, Navbar, Nav,NavDropdown } from '@themesberg/react-bootstrap';

import "../scss/volt.scss";

import { Routes } from "../routes";
// import './App.scss';


export default function () {
    return (
        <>
        <Navbar className="justify-content-between p-4" sticky="top" collapseOnSelect expand="lg" bg="dblack" variant="dark">
  
            <Navbar.Brand><span className='text-order'>Smart</span> Travelling</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Container  >
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/'><a>Home</a></Nav.Link>
                <Nav.Link as={Link} to={Routes.Signin.path} >Booking</Nav.Link>
                <NavDropdown  title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={Routes.Signin.path}>Make Your Travel</NavDropdown.Item>
                  <NavDropdown.Item has={Link} to={Routes.Signin.path}>To Do List</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={Routes.Signin.path}>About Us</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={Routes.Signin.path}>Donate Us</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              </Container>
            </Navbar.Collapse>
            <Card.Link as={Link} to={Routes.Signin.path}>
            <Card.Text className='text-behance' >Signin</Card.Text>
            </Card.Link>
                    
                
        </Navbar>   
        
        <main>
        <div className='d-flex flex-row justify-content-between bg-dblack p-4' style={{height:"95vh"}}>
                <div className='d-inline-block w-50 m-5 mt-7' >
                    <h1><span className='text-order'>Begin Your Journey</span > With Us</h1>
                    <p className='p-1 text-white'>In Pakistan, the travelling system is not up to mark. Due to which most of the people unable to see their own homeland. They do not know about their travelling expenses and also about the places they want to visit. Foreigners also find difficulties to visit all of places due to sign board’s mostly written in Urdu. </p>
                    <Button variant='order'>Explore the World</Button>
                </div>
            
                <div className='r-sec'>
                   <img src={process.env.PUBLIC_URL +'/icon.png'}  className="pic" /> 
                </div>
                <div className='clr'></div> 
            </div>
           <section className='d-flex m-5 justify-content-between'>
           <Card>
            <Card.Link as={Link} style={{ width: '18rem' }}>
                <Card.Img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Evening_shades.jpg/1200px-Evening_shades.jpg'} />
                  <Card.Body>
                    <Card.Title  >Trip Booking</Card.Title>
                    <Card.Text>
                    Book a trip with us which include all facilities and information regarding the place.
                    </Card.Text>
                    {/* <Button variant="order">Have a Look!</Button> */}
                  </Card.Body>
                </Card.Link>
                </Card>
                <Card>
                <Card.Link as={Link} style={{ width: '19rem' }}>
                    <Card.Img src={process.env.PUBLIC_URL +'./t1.jpg'} />
                      <Card.Body>
                        <Card.Title>Car Booking</Card.Title>
                        <Card.Text>
                          Book a Car which includes driver and
                           you can also calculate expenses with respect to different cars and destination.
                        </Card.Text>
                        {/* <Button variant="order">Learn More</Button> */}
                      </Card.Body>
                </Card.Link>
                </Card>
                <Card>
            <Card.Link as={Link} style={{ width: '18rem' }}>
                <Card.Img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Evening_shades.jpg/1200px-Evening_shades.jpg'} />
                  <Card.Body>
                    <Card.Title>Travel On Your Own</Card.Title>
                    <Card.Text>
                    Travel on your own and
                     get complete information regarding distance and also get estimation of expense.
                    </Card.Text>
                    {/* <Button variant="order">Find Out</Button> */}
                  </Card.Body>
            </Card.Link>
            </Card>
            </section>
            <h2 className='m-5'>About US</h2>
            <section className='d-flex m-5 justify-content-evenly'>
            
            <Card style={{ width: '14rem' }}>
                <Card.Img src={process.env.PUBLIC_URL +'/user1.png'} />
                  <Card.Body>
                    <Card.Title>Syed Ameer Hamza</Card.Title>
                  </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img src={process.env.PUBLIC_URL +'/user1.png'} />
                  <Card.Body>
                    <Card.Title>Ateeque Ahmed</Card.Title>
                    </Card.Body>
            </Card>
            </section>

        </main>
        <footer className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row justify-content-evenly'>
                <img src={process.env.PUBLIC_URL +'/twitter.png'} width="30px" /> 
                <img src={process.env.PUBLIC_URL +'/fb.png'} width="30px" /> 
                <img src={process.env.PUBLIC_URL +'/inst.png'} width="30px" /> 
                <img src={process.env.PUBLIC_URL +'/google.png'} width="30px" />  
                
            </div>
            <p className='f-p-1'>© 2021 Copyright. All right reserved</p>
            <div className='f-div-2'>
            <span>Smart</span> Travelling
            </div>
        </footer>
      </>  
    )
}

