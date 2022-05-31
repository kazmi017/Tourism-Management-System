import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
// components
import Sidebar from "../components/Sidebar";
import SidebarAdmin from '../components/SidebarAdmin';
import { Routes } from "../routes";
import Cars from './admin/Cars';
import Hotels from './admin/Hotels';
import Notifs from './admin/Notifs';
import OverView from './admin/OverView';
import Trips from './admin/Trips';
import Users from './admin/Users';
import Booking from './dashboard/Booking.jsx';
import Car from './dashboard/Car';
import DashboardOverview from "./dashboard/DashboardOverview.jsx";
import Historry from './dashboard/Historry';
import Hotel from './dashboard/Hotel';
import Solo from './dashboard/Solo';
import Solob from './dashboard/Solob';
import Trip from './dashboard/Trip';
import ForgotPassword from "./examples/ForgotPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ResetPassword from "./examples/ResetPassword";
import ServerError from "./examples/ServerError";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
// pages
import Presentation from "./Presentation";







const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

const AdminRouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <SidebarAdmin />

        <main className="content">
          <Component {...props} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />
    
    <AdminRouteWithSidebar exact path={Routes.Admin.path} component={OverView} />
    <AdminRouteWithSidebar exact path={Routes.Trips.path} component={Trips} />
    <AdminRouteWithSidebar exact path={Routes.Hotels.path} component={Hotels} />
    <AdminRouteWithSidebar exact path={Routes.Cars.path} component={Cars} />
    <AdminRouteWithSidebar exact path={Routes.Notifications.path} component={Notifs} />
    <AdminRouteWithSidebar exact path={Routes.Users.path} component={Users} />


    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Booking.path} component={Booking} />
    <RouteWithSidebar exact path={Routes.Solo.path} component={Solo} />
    <RouteWithSidebar exact path={Routes.Solob.path} component={Solob} />
    <RouteWithSidebar exact path={Routes.Car.path} component={Car} />
    <RouteWithSidebar exact path={Routes.Trip.path} component={Trip} />
    <RouteWithSidebar exact path={Routes.Hotel.path} component={Hotel} />
    <RouteWithSidebar exact path={Routes.History.path} component={Historry} />

    
    
    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
