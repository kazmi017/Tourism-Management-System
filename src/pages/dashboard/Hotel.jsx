import React,{useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom'
import { Col,Carousel, Row, Form, Card, Button, Container, InputGroup, Navbar, Nav,NavDropdown } from '@themesberg/react-bootstrap';

import {
    Autocomplete
  } from '@react-google-maps/api'

import { Routes } from "../../routes";
import PlaceCard from '../components/PlaceCard';

import axios from 'axios';
import {store} from "../../store/store"

export default function () {
  const history=useHistory()
  const [resp,setR]=useState([])
  const[o,seto]=useState("Islamabad")
  const [data,setD]=useState({
    email:store.getState()["user"]["email"]
  })
  const onChange = e => setD({ ...data, [e.target.name]: e.target.value });

  useEffect(()=>{
    var config = {
      method: 'get',
      url: 'https://vast-journey-06976.herokuapp.com/Hotel',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      // console.log(response.data);
      setR(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[0]);
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    


    const set=()=>{
        seto(originRef.current.value)
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        
        console.log(data)
        var config = {
          method: 'post',
          url: 'https://vast-journey-06976.herokuapp.com/HotelBook',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          alert(response.data.message)
          history.push(Routes.Hotel.path)
        })
        .catch(function (error) {
          console.log(error);
        });
        

    }

    const clicked=(item)=>{
      setD({
        ...data,
        name:item.name,
        rent:item.rent,
        place:item.place
      
      })
      console.log(data)
    }

    return (
        <>
        <h3>Most Visited Hotels in {o}:</h3>
        <Row className="d-flex flex-row justify-content-center text-white">
            <Col md={6} >
                <Carousel  >
                {resp.map(item => (
                  <Carousel.Item onClick={()=>clicked(item)}>
                    <img
                      className="d-block w-100"
                      src={process.env.PUBLIC_URL +'./kumrat.jpg'}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3 className="text-black">{item.name}</h3>
                      <h5>{item.rent}</h5>
                      <p>{item.place}/{item.star}Star</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
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
              <Form.Control name="ina"
              onChange={e => onChange(e)} 
              id="average" onFocus={set} placeholder="Check-In" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
              name="out"
              onChange={e => onChange(e)} 
              id="out" placeholder="Check-Out" />
            </Form.Group>
            <Form.Select className="mb-3">
              <Form.Control
              name="type"
              onChange={e => onChange(e)}
              id="name"  placeholder="Room Type" />
              <option>Normal</option>
              <option>Luxury</option>
              <option>King</option>
              <option>Queen</option>
              <option>All</option>
              </Form.Select>
            <Form.Group className="mb-3">
              <Form.Control
              name="rooms"
              onChange={e => onChange(e)}
              id="price" placeholder="Rooms" />
            </Form.Group>
            <Button type="submit">Search</Button>
          </fieldset>
        </Form>
        </Row>

        

      </>  
    )
}


