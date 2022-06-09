import {
  Autocomplete
} from '@react-google-maps/api';
import { Button, Card, Col, Form, Row } from '@themesberg/react-bootstrap';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from "../../routes";
import { store } from "../../store/store";
import Map from '../components/Map';

import CalendarCard from "../components/CalendarCard"






export default function () {

  const[cond,setCond]=useState("")
  const [styl,setStyle]=useState('border border-danger')
  const [d,setDa]=useState({})
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
        origin:originRef.current.value,
        destination:destiantionRef.current.value,
        days:counter
      })
    }

    const clicked=(item,e)=>{
      calculateRoute()
      setD({
        ...data,
        name:item.name,
        engine:item.engine,
        rent:item.rent
      })
      setCond(item.name)
      console.log(data)
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        let rent=data.outa.slice(8, 10)-data.ina.slice(8, 10)
        rent*=data.rent
        console.log(rent)
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
          history.push({
            pathname: Routes.Payment.path,
            state: { 
              data: rent, 
            },
          })
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
              <Form.Control required id="name" ref={originRef} placeholder="Origin" />
            </Form.Group>
            </Autocomplete>
            <Autocomplete>
          <Form.Group className="mb-3">
              <Form.Control required id="name" ref={destiantionRef} placeholder="Destinition" />
            </Form.Group>
            </Autocomplete>
            <Row>
            {resp.map(item => (
            <Card className={cond==item.name?styl:''} onClick={(e)=>clicked(item,e)} style={{ width: '12rem' ,height:'10rem'}}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.engine}cc</Card.Subtitle> 
                <Card.Text>Rent is {item.rent} per day.</Card.Text>
                <Card.Link href="#"></Card.Link>
              </Card.Body>
            </Card>  
            ))}          
            </Row>
            <h3>Enter Your Needs Detail</h3>
            <Col onFocus={calculateRoute} className="mt-2 mb-2">
                <h4>Days:</h4>
                <Row  md={3}>
              <CalendarCard set={setDa}/>
              </Row>
            </Col>
            
            
            <Button onFocus={()=>setD({...data,ina:d.ina,outa:d.outa})} type="submit">Proceed</Button>
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

