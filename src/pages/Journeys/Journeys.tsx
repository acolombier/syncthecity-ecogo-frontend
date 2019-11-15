import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonCard, IonIcon, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

const journeys = [
  {
    id: 1,
    from: 'London',
    to: 'Paris',
  },
  {
    id: 2,
    from: 'Norwich',
    to: 'Amsterdam',
  },
  {
    id: 3,
    from: 'London',
    to: 'Madrid',
  },
]

const JourneyScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Journeys</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {
            journeys.map(journey =>
              (
                <IonCard routerLink={`journeys/${journey.id}/detail`}>
                  <IonCardHeader>
                    <IonCardSubtitle>Date</IonCardSubtitle>
                    <IonCardTitle>{`${journey.from} to ${journey.to}`}</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              )
            )
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default JourneyScreen;