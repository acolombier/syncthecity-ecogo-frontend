import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { pin } from 'ionicons/icons';
import 'mapbox-gl/dist/mapbox-gl.css';

export interface LatLon {
  latitude: number;
  longitude: number;
}

interface Props {
  markers?: LatLon[];
}

export const Map: React.FC<Props> = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 51.5287718,
    longitude: -0.2416802,
    zoom: 9
  });

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
         props.markers ? props.markers.map(marker => (
          <Marker latitude={marker.latitude} longitude={marker.longitude}>
            <IonIcon icon={pin} />
          </Marker>
        )) : null
      }
    </ReactMapGL>
  )
};
