import { Button, Card, Col, Form, Row, Table } from '@themesberg/react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';





export default function () {
  const [id,setId]=useState({})
    const [data,setData]=useState({})
    const [status,setStatus]=useState("");
    const [resp,setR]=useState([])

    const onChange = e => setData({ ...data, [e.target.name]: e.target.value });
  

    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'https://vast-journey-06976.herokuapp.com/Notif',
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
        url: 'https://vast-journey-06976.herokuapp.com/Notif',
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
    const del=(id)=>{
      console.log(id)
      setId({_id:id})
      var config = {
        method: 'delete',
        url: 'https://vast-journey-06976.herokuapp.com/Notif',
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
               id="name" placeholder="Notification Name" />
            </Form.Group>
            </Row>
            <Col>
            <Form.Group className="mb-3">
              <Form.Control name="description"
              onChange={e => onChange(e)}
               id="desc" placeholder="Notification" />
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
                          <th>Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {resp.map(item => (
                      <tbody>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                          <td><Button onClick={()=>del(item._id)}>Remove</Button></td>
                        </tr>
                      </tbody>
                      ))}
                    </Table>
                </Row>
        </Card>

      </>  
    )
}

