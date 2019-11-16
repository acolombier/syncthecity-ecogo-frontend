import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { pin } from 'ionicons/icons';
import 'mapbox-gl/dist/mapbox-gl.css';
import { WebMercatorViewport } from 'viewport-mercator-project';

export interface LatLon {
  latitude: number;
  longitude: number;
}

interface Props {
  markers: LatLon[];
}

export const Map: React.FC<Props> = (props) => {
  const [viewport, setViewport] = useState();

  const setBoundingBox = () => {
    if (props.markers.length) {
      const { longitude, latitude, zoom } = new WebMercatorViewport(viewport)
        .fitBounds(
          [
            [
              props.markers[0].longitude,
              props.markers[0].latitude
            ],
            [
              props.markers[1].longitude,
              props.markers[1].latitude
            ]
          ], {}
        );
      setViewport({
        ...viewport,
        latitude,
        longitude,
        zoom,
      });
    }
  }

  useEffect(() => {
    setBoundingBox();
  }, []);

  useEffect(() => {
    setBoundingBox();
  }, [props.markers]);

  return (
    <ReactMapGL
      {...viewport}
      style={{ position: 'absolute' }}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      mapboxApiAccessToken={'pk.eyJ1IjoibmF0aGFudm9sbGVyIiwiYSI6ImNrMzA5cmRldDA1ajAzbnJjbWpid2xqNnUifQ.AtmKV4b9aJYA_M9tciJZDQ'}
    >
      {
        props.markers ? props.markers.map((marker, index) => (
          <Marker latitude={marker.latitude} longitude={marker.longitude} key={index}>
            <IonIcon icon={pin} />
          </Marker>
        )) : null
      }
    </ReactMapGL>
  )
};
