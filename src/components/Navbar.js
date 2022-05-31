
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faBell, faCog, faEnvelopeOpen, faSignOutAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Dropdown, Image, ListGroup, Nav, Navbar, Row } from '@themesberg/react-bootstrap';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import { Routes } from "../routes";




export default (props) => {
  const [notifications, setNotifications] = useState([]);
  const areNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }, 300);
  };

  useEffect(()=>{
    var config = {
        method: 'get',
        url: 'https://vast-journey-06976.herokuapp.com/Notif',
        headers: { }
      };
    
    axios(config)
    .then(function (response) {
      console.log("Notifs",response.data);
      setNotifications(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[]);


  const Notification = (props) => {
    const { description,name, read = false } = props;
    const readClassName = read ? "" : "text-danger";

    return (
      <ListGroup.Item action className="border-bottom border-light">
        <Row className="align-items-center">
          <Col className="col-auto">
          </Col>
          <Col className="ps-0 ms--2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h6 mb-0 text-small">{name}</h4>
              </div>
            </div>
            <p className="font-small mt-1 mb-0">{description}</p>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-end w-100">
          {/* <div className="d-flex align-items-center">
            <Card>
              <Card.Body>
                <Card.Subtitle>Points:1500</Card.Subtitle>
                </Card.Body>
                </Card>
          </div> */}
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead} >
              <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications me-lg-3">
                <span className="icon icon-sm">
                  <FontAwesomeIcon icon={faBell} className="bell-shake" />
                  {areNotificationsRead ? null : <span className="icon-badge rounded-circle unread-notifications" />}
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                <ListGroup className="list-group-flush">
                  <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                    Notifications
                  </Nav.Link>

                  {notifications.map(n => <Notification key={`notification-${n.id}`} {...n} />)}

                </ListGroup>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <Image src={Profile3} className="user-avatar md-avatar rounded-circle" />
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">Bonnie Green</span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" /> Messages
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserShield} className="me-2" /> Support
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item as={Link} to={Routes.Presentation.path} className="fw-bold">
                  <FontAwesomeIcon  icon={faSignOutAlt} className="text-danger me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
