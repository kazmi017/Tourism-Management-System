import { Button, Col, Row, Table } from '@themesberg/react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';





export default function () {
    const [e,setE]=useState({
      email:""
    })
    const [data,setData]=useState({})
    const [status,setStatus]=useState("");
    const [resp,setR]=useState([])
    const [respc,setRC]=useState([])
    const [respt,setRT]=useState([])
    const [resph,setRH]=useState([])
    const [id,setId]=useState({})

    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'https://vast-journey-06976.herokuapp.com/User',
            // url: 'https://vast-journey-06976.herokuapp.com/User',
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
        
        var config = {
          method: 'post',
          url: 'http://localhost:5002/UserDsT',
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
  
      }

      const del=(id,link)=>{
        console.log(id)
        setId({_id:id})
        var config = {
          method: 'delete',
          url: 'https://vast-journey-06976.herokuapp.com/'+link,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : { 
            _id: id
             
         }
        };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          Click(e)
        })
        .catch(function (error) {
          console.log(error);
        });

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
                          <td><Button onFocus={()=>{setE({email:item.email})}} onClick={()=>Click(item.email)}>Select</Button></td>
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
                          <th>Action</th>
                        </tr>
                      </thead>
                      {resph.map(item => (
                      <tbody>
                        <tr>
                        <td>{item.location}</td>
                        <td>{item.rent}</td>
                        <td>{item.location}</td>
                          
                        <td><Button
                        onClick={()=>del(item._id,'HotelBook')}
                        >Remove</Button></td>
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
                          
                        <td><Button
                        onClick={()=>del(item._id,'CarBook')}
                        >Remove</Button></td>
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
                          
                          <td><Button 
                        onClick={()=>del(item._id,'TripBook')}
                        >
                          Remove
                        </Button>
                        </td>
                        </tr>
                      </tbody>
                      ))}
                    </Table>
            </Col>
        </Row>

        </> 
    )
}

