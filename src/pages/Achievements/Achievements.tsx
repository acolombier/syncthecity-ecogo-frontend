import React from 'react';
import { IonToolbar, IonPage, IonContent, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonCardContent, IonImg, IonText } from '@ionic/react';
import Title from '../../components/Header/Title';
import Header from '../../components/Header/Header';
import { medal } from 'ionicons/icons';

const AchievementsScreen: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start"></IonButtons>
        <Title></Title>
      </IonToolbar>
      <Header>Achievements</Header>
      <IonContent>
        <IonCard style={{ textAlign: 'center' }}>
          <IonCardHeader>
            <IonCardSubtitle>{'You saved'}</IonCardSubtitle>
            <IonCardTitle>{`21.4 trees!`}</IonCardTitle>
          </IonCardHeader>
          <IonIcon icon={medal} size="large" />
        </IonCard>
        <IonCard style={{ textAlign: 'center' }}>
          <img src={`https://source.unsplash.com/400x225/?bike`} />
          <IonCardContent>
            <IonCardTitle style={{ fontSize: 'medium', color: 'gray' }}>
              {'You have been rewarded with'}
            </IonCardTitle>
            <IonCardTitle style={{ fontSize: 'medium' }}>
              {'4 hours of free bike rental'}
            </IonCardTitle>
            <IonCardTitle style={{ fontSize: 'medium', color: 'gray' }}>
              {'in the cities below'}
            </IonCardTitle>
            <IonImg
              alt="cities"
              src="/assets/citySelector.png"
              className="ion-padding"
            ></IonImg>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AchievementsScreen;
