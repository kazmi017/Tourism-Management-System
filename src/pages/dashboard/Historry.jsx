import { Button, Col, Row, Table } from '@themesberg/react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { store } from "../../store/store";






export default function () {
    const [e,setE]=useState({
      email:store.getState()["user"]["email"]
    })
    const [respc,setRC]=useState([])
    const [respt,setRT]=useState([])
    const [resph,setRH]=useState([])


    useEffect(()=>{
      console.log(e);
      setE({email:store.getState()["user"]["email"]})
      var config = {
        method: 'post',
        url: 'https://vast-journey-06976.herokuapp.com/UserDsT',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : e
      };
      
    
    axios(config)
    .then(function (response) {
      console.log(response.data);
      setRT(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    var config = {
        method: 'post',
        url: 'https://vast-journey-06976.herokuapp.com/UserDsC',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : e
    };
    
  
  axios(config)
  .then(function (response) {
    console.log(response.data);
    setRC(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

  var config = {
    method: 'post',
    url: 'https://vast-journey-06976.herokuapp.com/UserDsh',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : e
};
  

axios(config)
.then(function (response) {
  console.log(response.data);
  setRH(response.data);
})
.catch(function (error) {
  console.log(error);
});

    },[]);


    return (
        <>
        <Row md={2}>
            <Col style={{height:"15rem",overflowY: 'auto'}} md={6}> 
                <h3>Hotels Booked</h3>
                
                    <Table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Rent</th>
                          <th>Location</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {resph.map(item => (
                      <tbody>
                        <tr>
                        <td>{item.location}</td>
                        <td>{item.rent}</td>
                        <td>{item.location}</td>
                          
                        <td><Button>Remove</Button></td>
                        </tr>
                      </tbody>
                      ))}
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
                          <th>Engine</th>
                          <th>Days</th>
                          <th>Origin</th>
                          <th>Destination</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {respc.map(item => (
                      <tbody>
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.rent}</td>
                        <td>{item.engine}</td>
                        <td>{item.days}</td>
                        <td>{item.origin}</td>
                        <td>{item.destination}</td>
                          
                        <td><Button>Remove</Button></td>
                        </tr>
                      </tbody>
                      ))}
                    </Table>
            </Col>
            <Col style={{height:"15rem",overflowY: 'auto'}} md={6}> 
                <h3>Trip Booked</h3>
                    <Table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Location</th>
                          <th>Seats</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {respt.map(item => (
                      <tbody>
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.place}</td>
                        <td>{item.seats}</td>
                          
                          <td><Button>Remove</Button></td>
                        </tr>
                      </tbody>
                      ))}
                    </Table>
            </Col>
        </Row>

        </> 
    )
}

