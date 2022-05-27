import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { Col, Row, Form, Card, Button, Container, InputGroup, Navbar, Nav,NavDropdown } from '@themesberg/react-bootstrap';


import { Routes } from "../../routes";
import PlaceCard from '../components/PlaceCard';

export default function () {
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
    return (
        <>
        <Row className="d-flex justify-content-between">
          <Col md={7}>
            <PlaceCard src='./kumrat.jpg' alt='Kumrat' place='FairyLand' loc='Kumrat, Swat'/>
          </Col>
          <Col md={4} className="ml-5">
          <Card>
              <Card.Body>
                <Card.Title>Kumrat</Card.Title>
                <Card.Text className="border-bottom">
                  Availabale Seats
                </Card.Text>
                <Card.Text className="border-bottom">
                  Fare Per Head
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
                <Button  variant="primary">Book</Button> 
                <Card.Text className="border-bottom mt-2 d-flex flex-row justify-content-center text-center">
                  5124
                </Card.Text>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
         <Row md={3}>
        <Col md={3} className="mt-2">
        <PlaceCard src='./kumrat.jpg' alt='Kumrat' place='FairyLand' loc='Kumrat, Swat'/>
        </Col>
        <Col md={3} className="mt-2">
        <PlaceCard src='./kumrat.jpg' alt='Kumrat' place='FairyLand' loc='Kumrat, Swat'/>
        </Col>
        <Col md={3} className="mt-2">
        <PlaceCard src='./kumrat.jpg' alt='Kumrat' place='FairyLand' loc='Kumrat, Swat'/>
        </Col>
        <Col md={3} className="mt-2">
        <PlaceCard src='./kumrat.jpg' alt='Kumrat' place='FairyLand' loc='Kumrat, Swat'/>
        </Col>
        </Row>
        <Row md={3} className="mt-3 d-flex justify-content-between">
        <Col>
            <Card>
              <Card.Body>
                <Card.Title>Details</Card.Title>
                <Card.Text className="border-bottom">
                  Food
                </Card.Text>
                <Card.Text className="border-bottom">
                  Bus Type
                </Card.Text>
                <Card.Text className="border-bottom">
                    Time
                </Card.Text>
                <Card.Text className="border-bottom">
                    Date
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

