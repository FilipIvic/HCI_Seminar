import React from 'react'
import styles from './style.module.css'
import GoogleMapReact from 'google-map-react'

const LocationPin = ({ text }) => (
    <div className="pin">
      <p className="pin-text">{text}</p>
    </div>
  )

const Map = ({ location, zoomLevel }) => (
    <div className={styles.map}>
      <div className={styles.googleMap}>
        <GoogleMapReact
          defaultCenter={location.center}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

export default Map
