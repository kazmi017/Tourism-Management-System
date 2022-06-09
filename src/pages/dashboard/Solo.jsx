import {
  Autocomplete
} from '@react-google-maps/api';
import { Button, Card, Col, Form, Row } from '@themesberg/react-bootstrap';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Map from '../components/Map';
import { store } from "../../store/store";
import { Routes } from '../../routes';







export default function () {
  const [data,setd]=useState({
    email:store.getState()["user"]["email"]
  })
  const onChange = e => setd({ ...data, [e.target.name]: e.target.value });
  const [dis,setDis]=useState()
  const [expen,setEx]=useState()
  
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
      setDis(results.routes[0].legs[0].distance.text.split(" ")[0])
      setDuration("Time Duration is "+results.routes[0].legs[0].duration.text)
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        setEx((dis/data.average)*data.price)
        console.log((dis/data.average)*data.price)
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
              <Form.Control required id="name" ref={originRef} placeholder="Origin" />
            </Form.Group>
            </Autocomplete>
            <Autocomplete>
          <Form.Group className="mb-3">
              <Form.Control required id="name" ref={destiantionRef} placeholder="Destinition" />
            </Form.Group>
            </Autocomplete>
            <Form.Group className="mb-3">
              <Form.Control required id="name" onFocus={calculateRoute} placeholder="Car Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select required id="power" placeholder="Car Engine i.e, 1000cc">
              <option>660cc</option>
              <option>1000cc</option>
              <option>1300cc</option>
              <option>1500cc</option>
              <option>1800cc</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control required name="average"
              onChange={e => onChange(e)} id="average" placeholder="Car Average in KM" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control required id="type" placeholder="Car Type" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control required name="price"
              onChange={e => onChange(e)} id="price" placeholder="Fuel" />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="disabledFieldsetCheck"
                label="Can't check this"
              />
            </Form.Group> */}
            <Button type="submit">Calculate Expenses</Button>
          </fieldset>
        </Form>
        <h3>Fuel expense will be about {expen} Ruppees!</h3>
        </Col>
        <Col md={6} className="mt-6">
        <Map center={center} directionsResponse={directionsResponse}/> 
        </Col>
        </Row>
      </>  
    )
}

