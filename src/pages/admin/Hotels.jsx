import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom'

import { Col, Row, Form, Card, Button, ListGroup, Table, Navbar, Nav,NavDropdown } from '@themesberg/react-bootstrap';


import { Routes } from "../../routes";
import Admincard from '../components/Admincard';

import axios from 'axios';

export default function () {

    const [data,setData]=useState({})
    const [status,setStatus]=useState("");
    const [resp,setR]=useState([])

    const onChange = e => setData({ ...data, [e.target.name]: e.target.value });
  

    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'https://vast-journey-06976.herokuapp.com/Hotel',
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

    const history=useHistory()
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(data);
      var config = {
        method: 'post',
        url: 'https://vast-journey-06976.herokuapp.com/Hotel',
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
               id="name" placeholder="Hotel Name" />
            </Form.Group>
            </Row>
            <Col>
            <Form.Group className="mb-3">
              <Form.Control name="rent"
              onChange={e => onChange(e)}
               id="rent" placeholder="Hotel Rent(Per Day)" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="place"
              onChange={e => onChange(e)}
               id="place" placeholder="Location" />
               <Form.Group className="mb-3">
              <Form.Control name="star"
              onChange={e => onChange(e)}
               id="star" placeholder="Stars" />
            </Form.Group>
            </Form.Group>
            </Col>
          </fieldset>
        </Form>
          </Row>
        </Card>
        <Card  className='mt-5'>
            <Row>
                <Table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Rent</th>
                          <th>Location</th>
                          <th>Stars</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {resp.map(item => (
                      <tbody>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.rent}</td>
                          <td>{item.place}</td>
                          <td>{item.star}</td>
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

