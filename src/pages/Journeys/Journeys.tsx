import React from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react';
import { journeys } from '../../data/journeys';

const JourneysScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Journeys</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {journeys.map((journey, index) => (
            <IonCard routerLink={`journeys/${journey.id}/detail`} key={index}>
              <IonCardHeader>
                <IonCardSubtitle>
                  {new Date(journey.departTime).toLocaleDateString()}
                </IonCardSubtitle>
                <IonCardTitle>{`${journey.steps[0].from.city} to ${
                  journey.steps.reverse()[0].to.city
                }`}</IonCardTitle>
              </IonCardHeader>
              <img
                src={`https://source.unsplash.com/400x225/?${
                  journey.steps.reverse()[0].to.city
                }`}
              />
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default JourneysScreen;
