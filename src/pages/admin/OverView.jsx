import { Col, Row } from '@themesberg/react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router-dom';
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
              tit="Cars"
              sub="Add a Car" 
              desc="Here you can add Cars to database." 
              link={Routes.Cars.path}/>
            </Col>
            <Col md={3} className="mt-2">
            <Admincard 
              tit="Hotels"
              sub="Add a Hotel" 
              desc="Here you can add Hotels to database." 
              link={Routes.Hotels.path}/>
            </Col>    
            <Col md={3} className="mt-2">
              <Admincard 
              tit="Users Detail"
              sub="Check User Details" 
              desc="Here you can Check User Details from database." 
              link={Routes.Users.path}/>
            </Col>  
          </Row>
      </>  
    )
}

