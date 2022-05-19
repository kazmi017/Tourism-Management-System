import React,{useState,useRef} from 'react';
import {Link,useHistory} from 'react-router-dom'

import { Col, Row, Form, Card, Button, Container, InputGroup, Navbar, Nav,NavDropdown } from '@themesberg/react-bootstrap';


import { Routes } from "../../routes";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'

import Map from '../components/Map';

export default function () {
  
    const history=useHistory()
    const[distanc,setD]=useState(null)
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [center,setCenter] = useState({ lat: 48.8584, lng: 2.2945 })

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    function clearRoute() {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      originRef.current.value = ''
      destiantionRef.current.value = ''
    }
    async function calculateRoute() {
      if (originRef.current.value === '' || destiantionRef.current.value === '') {
        return
      }
      
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destiantionRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      })
      setDirectionsResponse(results)
      setDistance("Distance is "+results.routes[0].legs[0].distance.text)
      setDuration("Time Duration is "+results.routes[0].legs[0].duration.text)
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        // history.push(Routes.Solob.path)
        console.log(originRef.current.value+destiantionRef.current.value)
    }
    return (
        <>  
            
        <Row className='mt-5'>
          <Col md={6}>
        <Card>{distance}</Card>
        <Card>{duration}</Card>
        <h3>Enter Your Car Details</h3>

        <Form onSubmit={handlesubmit}>
          <fieldset>
          <Autocomplete>
          <Form.Group className="mb-3">
              <Form.Control id="name" ref={originRef} placeholder="Origin" />
            </Form.Group>
            </Autocomplete>
            <Autocomplete>
          <Form.Group className="mb-3">
              <Form.Control id="name" ref={destiantionRef} placeholder="Destinition" />
            </Form.Group>
            </Autocomplete>
            <Form.Group className="mb-3">
              <Form.Control id="name" onFocus={calculateRoute} placeholder="Car Name" />
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
        </Col>
        <Col md={6} className="mt-6">
        <Map center={center} directionsResponse={directionsResponse}/> 
        </Col>
        </Row>
      </>  
    )
}

