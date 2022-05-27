import React,{useState,useRef} from 'react';
import {Link,useHistory} from 'react-router-dom'

import { Col, Row, Form, Card, Button, Container, InputGroup, Navbar, Nav,NavDropdown } from '@themesberg/react-bootstrap';


import { Routes } from "../../routes";
import Admincard from '../components/Admincard';

export default function () {
  
    const history=useHistory()

    return (
        <>  
          <Row className="mt-7">
            <Col md={3} className="mt-2">
              <Admincard 
              tit="Trip"
              sub="Create a trip" 
              desc="Here you can add trip to database." 
              link={Routes.Trips.path}/>
            </Col>
            <Col md={3} className="mt-2">
            <Admincard 
              tit="Notifications"
              sub="Create a Notification" 
              desc="Here you can add Notifications to send users." 
              link={Routes.Notifications.path}/>
            </Col>
            <Col md={3} className="mt-2">
            <Admincard 
              tit="Trip"
              sub="Create a trip" 
              desc="Here you can add trip to database." 
              link={Routes.Trip.path}/>
            </Col>
            <Col md={3} className="mt-2">
            <Admincard 
              tit="Trip"
              sub="Create a trip" 
              desc="Here you can add trip to database." 
              link={Routes.Trip.path}/>
            </Col>    
            <Col md={3} className="mt-2">
              <Admincard 
              tit="Trip"
              sub="Create a trip" 
              desc="Here you can add trip to database." 
              link={Routes.Trip.path}/>
            </Col>  
          </Row>
      </>  
    )
}

