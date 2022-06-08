import { Row,Col, Button, Card } from '@themesberg/react-bootstrap';
import React from 'react';
import { useLocation } from 'react-router-dom';



export default function (props) {
    const location = useLocation()
    return (
        <>
        <Row className='d-flex justify-content-center text-center'>
        <h3>
              Scan this Qr and pay amount Rs/{location.state.data}.
          </h3>
            <Col md={3}>
       <Card className=" rounded-pill" >
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL +"/qr.png"}
              className="rounded-pill"
            />
          </Card>
          </Col>
          </Row>
          <Row md={4} className='d-flex justify-content-center mt-2'>
              <Button onClick={()=>alert("Wait for admin to check and complete your booking")}>
                  Wait for Confirmation</Button>
          </Row>
          
      </>  
    )
}

