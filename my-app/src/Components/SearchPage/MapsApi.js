import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh',
  position: 'absolute'
};

const center = {
  lat: 51.4900,
  lng: 0.0396
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB6BripnTmqpTajnBfbs_Qn_MNcn6Q00F8"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)