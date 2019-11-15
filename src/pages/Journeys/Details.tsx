import React, { useState, useEffect } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonRow, IonCol } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { JourneyStepSlides } from './components/Slides';
import { journeys, Journey } from '../../data/journeys';
import { Map, LatLon } from '../../components/Map';

interface JourneyDetailPageProps extends RouteComponentProps<{
  id: string;
}> { }

const Details: React.FC<JourneyDetailPageProps> = ({ match }) => {
  const [journey, setJourney] = useState<Journey>();
  const [markers, setMarkers] = useState<[LatLon]>();

  const updateMarkers = (markers: any) => {
    setMarkers(markers);
  }

  useEffect(() => {
    setJourney(journeys.find(journey => journey.id === match.params.id));
  }, [match.params.id]);

  if (!journey) return null;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/journeys" />
          </IonButtons>
          <IonTitle>{`${journey.from.city} to ${journey.to.city}`}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Map markers={markers} />
        <IonRow class="ion-align-items-end" style={{ height: '100%' }}>
          <IonCol>
            <JourneyStepSlides
              journeySteps={journey.steps}
              updateMarkers={(markers: any) => updateMarkers(markers)}
            />
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Details;
