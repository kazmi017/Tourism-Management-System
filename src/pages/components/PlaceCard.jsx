import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine,faLocationArrow, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row,Card, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import {Link} from 'react-router-dom'

function PlaceCard(props) {
    const {src,alt,place,loc} = props;
    return (
          <Card className="rounded-pill" >
            <Card.Img
              style={{height:"20rem" }}
              variant="top"
              src={process.env.PUBLIC_URL +src}
              alt={alt}
              className="rounded-pill"
            />
            <div class="card-img-overlay ">
              <Card.Body>
                <div style={{ marginTop: "13rem" }}>
                  <h5 className="text-30 fw-bold text-white">{place}</h5>
                  <div className="d-flex">
                    <p className="text-white">
                      {" "}
                      <FontAwesomeIcon icon={faLocationArrow} />
                      <span className="ms-1">{loc}</span>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Card>
    );
}

export default PlaceCard;