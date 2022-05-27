import React,{useState,useRef} from 'react';
import {Link,useHistory} from 'react-router-dom'

import { Col, Row, Form, Card, Button, ListGroup, Table, Navbar, Nav,NavDropdown } from '@themesberg/react-bootstrap';


import { Routes } from "../../routes";
import Admincard from '../components/Admincard';


import axios from 'axios';
import { useEffect } from 'react';

export default function () {

    const [status,setStatus]=useState("");
    const [data,setData]=useState({})
    const [resp,setR]=useState([])

  useEffect(()=>{
    var config = {
      method: 'get',
      url: 'https://vast-journey-06976.herokuapp.com/Trip',
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
  },[status]);


    
    
  
    const onChange = e => setData({ ...data, [e.target.name]: e.target.value });

    const history=useHistory()


    const handleSubmit=(e)=>{
      console.log(resp)
      e.preventDefault();
      console.log(data)
      var config = {
        method: 'post',
        url: 'https://vast-journey-06976.herokuapp.com/Trip',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setStatus(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    return (
        <>  
        <Card  className='mt-5'>
          <Row className='m-2'>
            {status}
          <Form onSubmit={handleSubmit}>
          <fieldset>
          <Row className='m-2 justify-content-end'>
            <Col md="1">
          <Button  type="submit">Add</Button>
          </Col>
          </Row>
            <Row md="3">
            <Form.Group className="mb-3">
              <Form.Control name="name"
              onChange={e => onChange(e)}
              id="name" placeholder="Trip Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="date"
              onChange={e => onChange(e)}
               id="date" placeholder="Date" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control name="place"
              onChange={e => onChange(e)}
               id="place" placeholder="Trip Place" />
            </Form.Group>
            </Row>
            <Col>
            <Form.Group className="mb-3">
              <Form.Control name="description"
              onChange={e => onChange(e)} 
              id="desc" placeholder="Trip Descriptiom" />
            </Form.Group>
            </Col>
          </fieldset>
        </Form>
          </Row>
        </Card>
        <Card  className='mt-5'>
        <Row>
        
            {/* <ListGroup onClick={()=>{console.log("Clicked")}} horizontal>
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item>!</ListGroup.Item>
              <Button>Remove</Button>
            </ListGroup> */}
       
        
        <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Place</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              {resp.map(item => (
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.place}</td>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                  <td><Button>Remove</Button></td>
                </tr>
              </tbody>
              ))}
            </Table>
            
        </Row>
        </Card>

      </>  
    )
}

