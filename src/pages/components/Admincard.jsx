import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine,faLocationArrow, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row,Card, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import {Link} from 'react-router-dom'

function Admincard(props) {
    const {tit,sub,desc,link} = props;
    return (
      <Link to={link}>
        <Card>
          <Card.Body>
            <Card.Title>{tit}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{sub}</Card.Subtitle>
            <Card.Text>
              {desc}
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>  
    );
}

export default Admincard;