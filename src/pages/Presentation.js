import React from 'react';
import {Link} from 'react-router-dom'
import Signin from "./examples/Signin";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';

import { Routes } from "../routes";
import './App.scss';


export default function () {
    return (
        <>
        <header className='header'>
            <nav>
                <div>
                    <div className='nav-div'><span>Smart</span> Travelling</div>
                    
                        <div className='nav-div-1'>
                            <ul className='ul'>
                                <li>
                                    <Link to='/'><span>Home</span></Link>
                                </li>
                                <li>
                                    <Link to='/Booking'>Booking</Link>
                                </li>
                                <li>
                                    <Link to='/MakeYourTravel'>Make Your Travel</Link>
                                </li>
                                
                                <li>
                                    <Link to='/TodoList'>To Do List</Link>
                                </li>
                                <li>
                                    <Link to='/About'>About Us</Link>    
                                </li>
                                
                            </ul>
                        </div>
                            <Card.Link as={Link} to={Routes.Signin.path} className="text-gray-700">
                            <img src={process.env.PUBLIC_URL +'/user.jpg'} width="28px" className="download" />
                            </Card.Link>
                            {/* <Card.Link as={Link} to={Routes.Signin.path}>
                            <img src={process.env.PUBLIC_URL +'/search.png'} width='65px' className="search" />    
                            </Card.Link> */}
                </div>
            </nav>    
            <div className='clr'></div> 
        </header>   
        
        <main>
            <section className='sec-1'>
                <div className='l-sec'>
                    <h1><span>Begin Your Journey</span> With Us</h1>
                    <p className='p-1'>In Pakistan, the travelling system is not up to mark. Due to which most of the people unable to see their own homeland. They do not know about their travelling expenses and also about the places they want to visit. Foreigners also find difficulties to visit all of places due to sign board’s mostly written in Urdu. </p>
                    <button className='btn-1'>Explore the World</button>
                </div>
            
                <div className='r-sec'>
                   <img src={process.env.PUBLIC_URL +'/icon.png'}  className="pic" /> 
                </div>
                <div className='clr'></div> 
            </section>
           
            <section className='sec-2'>
                <div className='sec-2-div-1'>
                   <img src={process.env.PUBLIC_URL +'/cards.jpg'} width="250px" height='250px' className="pic-1" /> 
                   <h2>Car Booking</h2>
                   <p className='p-2'>Book a Car which includes driver and you can also calculate expenses with respect to different cars and destination.</p>
                   <button className='btn'>Click Me</button>
                </div>
                <div className='sec-2-div-2'>
                   <img src={process.env.PUBLIC_URL +'/cards.jpg'} width="250px" height='250px' className="icon" /> 
                   <h2>Trip Booking</h2>
                   <p className='p-2'>Book a trip with us which include all facilities and information regarding the place.</p>
                   <button className='btn'>Click Me</button>
                </div>
                <div className='sec-2-div-3'>
                   <img src={process.env.PUBLIC_URL +'/cards.jpg'} width="250px" height='250px' className="icon" /> 
                   <h2>Travel Own Your Own</h2>
                   <p className='p-2'>Travel on your own and get complete information regarding distance and also get estimation of expense.</p>
                   <button className='btn'>Click Me</button>
                </div>
                <div className='clr'></div> 
            </section>
            <section className='sec-3'>
                <h2>About US</h2>
                <div className='sec-3-div-1'>
                   <img src={process.env.PUBLIC_URL +'/user1.png'} width="100px" className="user-1" /> 
                   <h3>Syed Ameer Hamza</h3>
                </div>
                <div className='sec-3-div-2'>
                   <img src={process.env.PUBLIC_URL +'/user1.png'} width="100px" className="user-2" /> 
                   <h3>Ateeque Ahmed</h3>
                </div>
                <button className='btn btn-2'>Click For More Information</button>
                <div className='clr'></div> 
            </section>
        </main>
        <footer>
            <div className='f-div-1'>
                <img src={process.env.PUBLIC_URL +'/twitter.png'} width="30px" className="twitter" /> 
                <img src={process.env.PUBLIC_URL +'/fb.png'} width="30px" className="fb" /> 
                <img src={process.env.PUBLIC_URL +'/inst.png'} width="30px" className="inst" /> 
                <img src={process.env.PUBLIC_URL +'/google.png'} width="30px" className="google" />  
                
            </div>
            <p className='f-p-1'>© 2021 Copyright. All right reserved</p>
            <div className='f-div-2'>
            <span>Smart</span> Travelling
            </div>
            <div className='clr'></div> 
        </footer>
      </>  
    )
}

