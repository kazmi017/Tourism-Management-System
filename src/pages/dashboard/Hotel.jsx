import {
  Autocomplete
} from '@react-google-maps/api';
import { Button, Card, Carousel, Col, Form, Row } from '@themesberg/react-bootstrap';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from "../../routes";
import { store } from "../../store/store";

import CalendarCard from "../components/CalendarCard"




export default function () {
  const[cond,setCond]=useState("")
  const [styl,setStyle]=useState('border border-danger')
  const [d,setDa]=useState({})
  const history=useHistory()
  const [resp,setR]=useState([])
  const[o,seto]=useState("Islamabad")
  const [data,setD]=useState({
    email:store.getState()["user"]["email"],
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
        let rent=data.outa.slice(8, 10)-data.ina.slice(8, 10)
        rent*=data.rent
        rent*=data.rooms
        
        console.log(rent)
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

    const clicked=(item)=>{
      setD({
        ...data,
        name:item.name,
        rent:item.rent,
        place:item.place
      
      })
      setCond(item.name)
      console.log(data)
    }

    return (
        <>
        <h3>Click to Select:</h3>
        <Row className="d-flex flex-row justify-content-center text-order">
            <Row md={4}>
            {resp.map(item => (
            <Card className={cond==item.name?styl:''} onClick={()=>clicked(item)}>
              <Card.Body>
              <img
                      className="d-block w-100"
                      src={process.env.PUBLIC_URL +'./kumrat.jpg'}
                      alt="First slide"
                    />
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.place}/{item.star}Star</Card.Subtitle> 
                <Card.Text>Rent is {item.rent} per day.</Card.Text>
                <Card.Link href="#"></Card.Link>
              </Card.Body>
            </Card>  
            ))}          
            </Row>
        </Row>
        <Row>
        <Form onSubmit={handlesubmit} className="mt-5" >
          <fieldset>
          <Autocomplete>
          <Form.Group className="mb-3">
              <Form.Control id="name" ref={originRef} placeholder="Location" />
            </Form.Group>
            </Autocomplete>
            <Row onFocus={set} md={3}>
              <CalendarCard set={setDa}/>
              </Row>

            {/* <Form.Group className="mb-3">
              <Form.Control name="ina"
              onChange={e => onChange(e)} 
              id="average" onFocus={set} placeholder="Check-In" />
            </Form.Group> */}
            {/* <Form.Group className="mb-3">
              <Form.Control
              name="out"
              onChange={e => onChange(e)} 
              id="out" placeholder="Check-Out" />
            </Form.Group> */}
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
            <Button onFocus={()=>setD({...data,ina:d.ina,outa:d.outa})} type="submit">Book</Button>
          </fieldset>
        </Form>
        </Row>

        

      </>  
    )
}


