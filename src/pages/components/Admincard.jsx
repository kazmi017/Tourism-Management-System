import { Card } from '@themesberg/react-bootstrap';
import React from "react";
import { Link } from 'react-router-dom';


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