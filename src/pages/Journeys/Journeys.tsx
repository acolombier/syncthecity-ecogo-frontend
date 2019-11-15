import React from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

const journeys = [
  {
    id: 1,
    from: 'London',
    to: 'Paris',
    date: '2019-10-11'
  },
  {
    id: 2,
    from: 'Norwich',
    to: 'Amsterdam',
    date: '2019-10-11'
  },
  {
    id: 3,
    from: 'London',
    to: 'Madrid',
    date: '2019-10-11'
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
                  <IonCardSubtitle>{new Date(journey.date).toLocaleDateString()}</IonCardSubtitle>
                    <IonCardTitle>{`${journey.from} to ${journey.to}`}</IonCardTitle>
                  </IonCardHeader>
                  <img src={`https://source.unsplash.com/400x225/?${journey.to}`} />
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