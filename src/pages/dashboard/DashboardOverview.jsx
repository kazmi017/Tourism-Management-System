
import React,{useEffect,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine,faLocationArrow, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row,ListGroup,Card, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { DatePicker, RangePicker, theme } from 'react-trip-date';
import {ThemeProvider} from 'styled-components';
import themeStyle from "../../assets/syntax-themes/ghcolors.json";

import {Link, useHistory} from 'react-router-dom'
import PlaceCard from "../components/PlaceCard";
import CalendarCard from "../components/CalendarCard";


import axios from 'axios';
import { Routes } from "../../routes";

export default () => {

  const [resp,setR]=useState([])
  const history=useHistory()

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
  },[]);

  return (
    <>
    <Row>
    {resp.map(item => (
      <Col onClick={()=>{history.push({
        pathname: Routes.Trip.path,
        state: {  // location state
          data: item, 
        },
      })}} md={3} className="mt-2">
        <PlaceCard  src={item.src} alt='Kumrat' place={item.name} loc={item.place}/>
      </Col>
    ))}
      {/* <Col md={3} className="mt-2">
        <PlaceCard  src='./chitral.jpg' alt='Chitral' place='The Place of Beauty & Peace' loc='Chitral, Swat'/>
      </Col>
      <Col md={3} className="mt-2">
        <PlaceCard src='./gilgit.jpg' alt='Gilgit' place='The Land of Peaks & Streams' loc='Gilgit, GB'/>
      </Col>
      <Col md={3} className="mt-2">
        <PlaceCard src='./malam.jpg'alt='MalamJabba' place='The Switzerland of Pakistan' loc='MalamJabba, Swat'/>
      </Col> */}
    </Row>
    
    </>
  );
};
