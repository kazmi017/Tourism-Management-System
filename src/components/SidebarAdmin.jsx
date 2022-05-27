
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faHome, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faCalendarAlt, faMapPin, faInbox, faRocket, faHistory, faCar, faCaretSquareDown, faArrowAltCircleDown, faArrowAltCircleRight, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  
  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            
            <Nav className="flex-column pt-3 pt-md-0">
              

              <NavItem title="Overview" link={Routes.Admin.path} icon={faChartPie} />
              <NavItem title="Trips" link={Routes.Trips.path} icon={faArrowAltCircleRight} />
              <NavItem title="Notifications" link={Routes.Notifications.path} icon={faInbox} />
              <NavItem title="Cars" icon={faCar} link={Routes.Cars.path} />
              <NavItem title="Hotels" icon={faHome} link={Routes.Hotels.path} />
              <Dropdown.Divider className="my-3 border-indigo" />
              <NavItem title="Users" link={Routes.Users.path} icon={faUserAstronaut} />
              <Dropdown.Divider className="my-3 border-indigo" />
              <NavItem title="Logout" link={Routes.Presentation.path} image={ReactHero} />
              
               </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
