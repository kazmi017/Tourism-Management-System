import React,{useState,useRef} from 'react';
import {Link} from 'react-router-dom'
import { Col,Carousel, Row, Form, Card, Button, Container, InputGroup, Navbar, Nav,NavDropdown } from '@themesberg/react-bootstrap';

import {
    Autocomplete
  } from '@react-google-maps/api'

import { Routes } from "../../routes";
import PlaceCard from '../components/PlaceCard';

export default function () {
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    const[o,seto]=useState("Islamabad")


    const set=()=>{
        seto(originRef.current.value)
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        // history.push(Routes.Solob.path)
        console.log(originRef.current.value)
        

    }

    return (
        <>
        <h3>Most Visited Hotels in {o}:</h3>
        <Row className="d-flex flex-row justify-content-center">
            <Col md={6} >
                <Carousel  >
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={process.env.PUBLIC_URL +'./kumrat.jpg'}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={process.env.PUBLIC_URL +'./kumrat.jpg'}
                      alt="Second slide"
                    />
                
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={process.env.PUBLIC_URL +'./kumrat.jpg'}
                      alt="Third slide"
                    />
                
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <Row>
        <Form onSubmit={handlesubmit} className="mt-5" >
          <fieldset>
          <Autocomplete>
          <Form.Group className="mb-3">
              <Form.Control id="name" ref={originRef} placeholder="Location" />
            </Form.Group>
            </Autocomplete>
            <Form.Group className="mb-3">
              <Form.Control id="average" onFocus={set} placeholder="Check-In" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control id="type" placeholder="Check-Out" />
            </Form.Group>
            <Form.Select className="mb-3">
              <Form.Control id="name"  placeholder="Room Type" />
              <option>Normal</option>
              <option>Luxury</option>
              <option>King</option>
              <option>Queen</option>
              <option>All</option>
              </Form.Select>
            <Form.Group className="mb-3">
              <Form.Control id="price" placeholder="Rooms" />
            </Form.Group>
            <Button type="submit">Search</Button>
          </fieldset>
        </Form>
        </Row>

        

      </>  
    )
}


