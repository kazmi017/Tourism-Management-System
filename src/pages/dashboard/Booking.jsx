import { Button, Card } from '@themesberg/react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';




export default function () {
    return (
        <>  
        
        <main className='mt-4'>
        <div className='d-flex flex-row justify-content-between bg-dblack p-4 rounded-pill' style={{height:"95vh"}}>
                <div className='d-inline-block w-50 m-5 mt-7' >
                    <h1><span className='text-order'>Begin Your Journey</span > With Us</h1>
                    <p className='p-1 text-white'>In Pakistan, the travelling system is not up to mark. Due to which most of the people unable to see their own homeland. They do not know about their travelling expenses and also about the places they want to visit. Foreigners also find difficulties to visit all of places due to sign board’s mostly written in Urdu. </p>
                    <Button variant='order'>Explore the World</Button>
                </div>
            
                <div className='r-sec '>
                   <img src={process.env.PUBLIC_URL +'/icon.png'}  className="pic" /> 
                </div>
                <div className='clr'></div> 
            </div>
            <h2 className='m-5'><u>We are Offering</u></h2>
           <section className='d-flex m-5 justify-content-between'>
           <Card>
            <Card.Link as={Link} style={{ width: '18rem' }}>
                <Card.Img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Evening_shades.jpg/1200px-Evening_shades.jpg'} />
                  <Card.Body>
                    <Card.Title  >Trip Booking</Card.Title>
                    <Card.Text>
                    Book a trip with us which include all facilities and information regarding the place.
                    </Card.Text>
                    {/* <Button variant="order">Have a Look!</Button> */}
                  </Card.Body>
                </Card.Link>
                </Card>
                <Card>
                <Card.Link as={Link} style={{ width: '19rem' }}>
                    <Card.Img src={process.env.PUBLIC_URL +'./t1.jpg'} />
                      <Card.Body>
                        <Card.Title>Car Booking</Card.Title>
                        <Card.Text>
                          Book a Car which includes driver and
                           you can also calculate expenses with respect to different cars and destination.
                        </Card.Text>
                        {/* <Button variant="order">Learn More</Button> */}
                      </Card.Body>
                </Card.Link>
                </Card>
                <Card>
            <Card.Link as={Link} style={{ width: '18rem' }}>
                <Card.Img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Evening_shades.jpg/1200px-Evening_shades.jpg'} />
                  <Card.Body>
                    <Card.Title>Travel On Your Own</Card.Title>
                    <Card.Text>
                    Travel on your own and
                     get complete information regarding distance and also get estimation of expense.
                    </Card.Text>
                    {/* <Button variant="order">Find Out</Button> */}
                  </Card.Body>
            </Card.Link>
            </Card>
            </section>

        </main>
      </>  
    )
}

