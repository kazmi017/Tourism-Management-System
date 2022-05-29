import React,{useState,useRef,useEffect} from 'react';
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

import axios from 'axios';
import {store} from "../../store/store"

export default function () {
  const [resp,setR]=useState([])
  const [data,setD]=useState({
    email:store.getState()["user"]["email"]
  })
  const onChange = e => setD({ ...data, [e.target.name]: e.target.value });

  useEffect(()=>{
    var config = {
      method: 'get',
      url: 'https://vast-journey-06976.herokuapp.com/Car',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data);
      setR(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[]);


    const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(count => count + 1);
  };
  const decrease = () => {
      if(counter>0)
        setCounter(count => count - 1);
  };
  const reset = () =>{
    setCounter(0)
  }
  

   

    const history=useHistory()
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
      setD({
        ...data,
        orgin:originRef.current.value,
        destination:destiantionRef.current.value,
        days:counter
      })
    }

    const clicked=(item)=>{
      setD({
        ...data,
        name:item.name,
        engine:item.engine,
        rent:item.rent
      })
      console.log(data)
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        // history.push(Routes.Solob.path)
        console.log(data)
        var config = {
          method: 'post',
          url: 'https://vast-journey-06976.herokuapp.com/CarBook',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          alert(response.data.message)
          history.push(Routes.Car.path)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
        <>  
            
        <Row className='mt-5'>
          <Col md={6}>
        <Card>{distance}</Card>
        <Card>{duration}</Card>

        
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
            <h3>Enter Your Needs Detail</h3>
            <Col onFocus={calculateRoute} className="mt-2 mb-2">
                <h4>Days:</h4>
            <Row md={4} className="d-flex flex-row justify-content-center text-center" >
            <Button className="control__btn" onClick={increase}>+</Button>
            <span>{counter}</span>
            <Button className="control__btn" onClick={decrease}>-</Button>
            </Row>
            <Row md={4} className="d-flex flex-row justify-content-center text-center">
                <Button onClick={reset}>Reset</Button>
            </Row>
            </Col>
            <Row>
            {resp.map(item => (
            <Card onClick={()=>clicked(item)} style={{ width: '12rem' ,height:'10rem'}}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.engine}cc</Card.Subtitle> 
                <Card.Text>Rent is {item.rent} per day.</Card.Text>
                <Card.Link href="#"></Card.Link>
              </Card.Body>
            </Card>  
            ))}          
            </Row>
            
            <Button type="submit">Submit</Button>
          </fieldset>
        </Form>
        </Col>
        <Col md={6} className="mt-5">
        <Map center={center} directionsResponse={directionsResponse}/> 
        </Col>
        </Row>
      </>  
    )
}

