import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'

import { Col, Row, Form, Card, Button, Container, InputGroup, Navbar, Nav,NavDropdown } from '@themesberg/react-bootstrap';


import { Routes } from "../../routes";
import { withGoogleMap,withScriptjs, GoogleMap, DirectionsRenderer } from 'react-google-maps';

import Map from './Map';

export default function () {
    const history=useHistory()
    const[distance,setD]=useState(null)
    const MapLoader = withScriptjs(Map);
    const handlesubmit=(event)=>{
        event.preventDefault();
        history.push(Routes.Solob.path)
    }
    return (
        <>  
        <Col className="pt-5 d-flex " md={12}>
            <MapLoader
                setter={setD}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBn6Hku1QtnQLHqJwsB_ExWjaWA60R0rL8"
                loadingElement={<div style={{ height: '100%' }} />}
                // onMapClick={console.log("hello")}
            />
            
        </Col>
        <h1>Distance is {distance}km</h1>
        <h3>Enter Your Car Details</h3>
        <Form onSubmit={handlesubmit}>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Control id="name" placeholder="Car Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select id="power" placeholder="Car Engine i.e, 1000cc">
              <option>660cc</option>
              <option>1000cc</option>
              <option>1300cc</option>
              <option>1500cc</option>
              <option>1800cc</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control id="average" placeholder="Car Average in KM" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control id="type" placeholder="Car Type" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control id="price" placeholder="Fuel" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control id="disabledTextInput" placeholder="Car Name" />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="disabledFieldsetCheck"
                label="Can't check this"
              />
            </Form.Group> */}
            <Button type="submit">Submit</Button>
          </fieldset>
        </Form>
      </>  
    )
}

