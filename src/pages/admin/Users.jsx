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

    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:5002/User',
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

      const Click=(email)=>{
        console.log(email);
        // var config = {
        //   method: 'post',
        //   url: 'http://localhost:5002/Hotel',
        //   headers: { 
        //     'Content-Type': 'application/json'
        //   },
        //   data : data
        // };
  
        // axios(config)
        //   .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        //     setStatus(JSON.stringify(response.data))
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
  
      }

    return (
        <>
        <Row md={2}>
            <Col style={{height:"20rem",overflowY: 'auto'}} md={6}> 
                <h3>Users List</h3>
                    <Table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {resp.map(item => (
                      <tbody>
                        <tr>
                          <td>{item.fName}</td>
                          <td>{item.email}</td>
                          <td><Button onClick={()=>Click(item.email)}>Select</Button></td>
                        </tr>
                      </tbody>
                      ))}
                    </Table>
            </Col>
            <Col style={{height:"15rem",overflowY: 'auto'}} md={6}> 
                <h3>Hotels Booked</h3>
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
                      <tbody>
                        <tr>
                          <td>item.name</td>
                          <td>item.rent</td>
                          <td>item.place</td>
                          <td>item.star</td>
                          <td><Button>Remove</Button></td>
                        </tr>
                      </tbody>
                    </Table>
            </Col>
        </Row>
        <Row md={2}>
            <Col style={{height:"15rem",overflowY: 'auto'}} md={6}> 
                <h3>Car Booked</h3>
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
                      <tbody>
                        <tr>
                          <td>item.name</td>
                          <td>item.rent</td>
                          <td>item.place</td>
                          <td>item.star</td>
                          <td><Button>Remove</Button></td>
                        </tr>
                      </tbody>
                    </Table>
            </Col>
            <Col style={{height:"15rem",overflowY: 'auto'}} md={6}> 
                <h3>Trip Booked</h3>
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
                      <tbody>
                        <tr>
                          <td>item.name</td>
                          <td>item.rent</td>
                          <td>item.place</td>
                          <td>item.star</td>
                          <td><Button>Remove</Button></td>
                        </tr>
                      </tbody>
                    </Table>
            </Col>
        </Row>

        </> 
    )
}

