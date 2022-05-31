import {
  DirectionsRenderer, GoogleMap,
  Marker, useJsApiLoader
} from '@react-google-maps/api';
import { Col } from '@themesberg/react-bootstrap';
import React from 'react';




export default function (props) {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  // const directionsResponse = props;
  

  return (
    <Col
    md={2}
    >
      
        {/* Google Map Box */}
        
        <GoogleMap
          center={props.center}
          zoom={15}
          mapContainerStyle={{ height: '500px', width: "500px" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker position={props.center} />
          {props.directionsResponse && (
            <DirectionsRenderer directions={props.directionsResponse} />
          )}
        </GoogleMap>
    </Col>
  )
}