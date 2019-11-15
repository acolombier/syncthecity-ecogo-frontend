import React, { useState } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonSlides, IonSlide, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { journeys } from '../../data/journeys';

interface JourneyDetailPageProps extends RouteComponentProps<{
  id: string;
}> { }

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Details: React.FC<JourneyDetailPageProps> = ({ match }) => {
  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    latitude: 51.5287718,
    longitude: -0.2416802,
    zoom: 8
  });

  const journey = journeys.find(journey => journey.id === match.params.id);
  if (!journey) return null;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/journeys" />
          </IonButtons>
          <IonTitle>{`${journey.from} to ${journey.to}`}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ReactMapGL
          {...viewport}
          style={{ position: 'absolute' }}
          width="100%"
          height="100%"
          onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle="mapbox://styles/mapbox/outdoors-v11"
          mapboxApiAccessToken={'pk.eyJ1IjoibmF0aGFudm9sbGVyIiwiYSI6ImNrMzA5cmRldDA1ajAzbnJjbWpid2xqNnUifQ.AtmKV4b9aJYA_M9tciJZDQ'}
        />
        <IonSlides pager={true} options={slideOpts}>
          {
            journey.steps.map(step => (
              <IonSlide>
                <IonCard routerLink={`journeys/${journey.id}/detail`}>
                  <IonCardHeader>
                    <IonCardSubtitle>{step.mode}</IonCardSubtitle>
                    <IonCardTitle>{`${step.from} to ${step.to}`}</IonCardTitle>
                  </IonCardHeader>
                  <img src={`https://source.unsplash.com/400x225/?${step.mode}`} />
                </IonCard>
              </IonSlide>
            ))
          }
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Details;
