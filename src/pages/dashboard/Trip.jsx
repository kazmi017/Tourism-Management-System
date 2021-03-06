import { Button, Card, Col, Row } from '@themesberg/react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { store } from "../../store/store";
import PlaceCard from '../components/PlaceCard';

import { useHistory } from 'react-router-dom';
import { Routes } from '../../routes';



export default function (props) {
  const history=useHistory()
  const [counter, setCounter] = useState(0);
  const [data,setD]=useState({
    email:store.getState()["user"]["email"],
      name:"",
      place:"",
      date:"",
      seats:counter
  
  
  })
  const location = useLocation()
  var d={date: "test",
  description: "test",
  name: "test",
  place: "test",
  seats: "test",
  src: "./malam.jpg"}
  if(location.state)
  d=location.state.data;
  
  const increase = () => {
    if(counter<location.state.data.seats)
    setCounter(count => count + 1);
    
  };
  const decrease = () => {
      if(counter>0)
        setCounter(count => count - 1);
        
  };
  const reset = () =>{
    setCounter(0)
  }
  const change=()=>{
    setD({
      ...data,
      name:d.name,
      place:d.place,
      date:d.date,
      seats:counter
  
  })
  }

  const upd=()=>{
    var config = {
      method: 'put',
      url: 'https://vast-journey-06976.herokuapp.com/TripBook',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : {
        _id: d._id,
        seats: d.seats-counter
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(data)
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const clicked=(e)=>{
    e.stopPropagation();
    var config = {
      method: 'post',
      url: 'https://vast-journey-06976.herokuapp.com/TripBook',
      // url: 'https://vast-journey-06976.herokuapp.com/TripBook',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  alert(response.data.message)
  upd()
  history.push({
    pathname: Routes.Payment.path,
    state: { 
      data: "rent", 
    },
  })
})
.catch(function (error) {
  console.log(error);
});
    
  console.log(data)

  }
  useEffect(()=>{
    console.log(d)
  },[]);
    return (

        <>
        <Row className="d-flex justify-content-between">
          <Col md={7}>
            <PlaceCard src={d.src} alt={d.name} place={d.place} loc={d.place}/>
          </Col>
          <Col md={4} className="ml-5">
          <Card>
              <Card.Body>
                <Card.Title>{d.name}</Card.Title>
                <Card.Text className="border-bottom">
                  Availabale Seats:{d.seats}
                </Card.Text>
                <Card.Text className="border-bottom">
                  Date:{d.date}
                </Card.Text>
                <Card.Text className="border-bottom">
                <Col className="mt-2 mb-2">
                    <h4>Seats:</h4>
                    <Row md={6} className="d-flex flex-row justify-content-center text-center" >
                    <Button className="control__btn" onClick={increase}>+</Button>
                    <span>{counter}</span>
                    <Button className="control__btn" onClick={decrease}>-</Button>
                    </Row>
                    <Row md={4} className="mt-2 d-flex flex-row justify-content-center text-center">
                        <Button onClick={reset}>Reset</Button>
                    </Row>
                    </Col>
                </Card.Text>
                <Row md={2}>
                <Button onClick={(event)=>clicked(event)} onFocus={change}  variant="primary">Book</Button> 
                <Card.Text className="border-bottom mt-2 d-flex flex-row justify-content-center text-center">
                  5124
                </Card.Text>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row md={3} className="mt-3 d-flex justify-content-between">
        <Col>
            <Card>
              <Card.Body>
                <Card.Title>Details</Card.Title>
                <Card.Text className="border-bottom">
                 {d.description}
                </Card.Text>
                
              </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
              <Card.Body>
                <Card.Title>Organzier Details</Card.Title>
                <Card.Text className="border-bottom">
                  Name
                </Card.Text>
                <Card.Text className="border-bottom">
                  Phone Number
                </Card.Text>
                <Card.Text className="border-bottom">
                    Whatsapp
                </Card.Text>
                <Card.Text className="border-bottom">
                    Tour Interval
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        </Row>
      </>  
    )
}

