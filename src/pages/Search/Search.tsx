import {
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonPage,
  IonInput,
  IonDatetime,
  IonButton,
  IonFooter,
  IonToolbar,
  IonButtons,
  IonImg
} from '@ionic/react';
import { pin, locate, calendar } from 'ionicons/icons';
import React from 'react';
import './Search.scss';
import Header from '../../components/Header/Header';
import Title from '../../components/Header/Title';

const SearchScreen: React.FC = () => {
  const now = new Date();
  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start"></IonButtons>
        <Title></Title>
      </IonToolbar>
      <Header>What's your destination?</Header>
      <IonContent slot="fixed">
        <IonCard>
          <IonCardContent className="ion-align-items-center flex">
            <IonIcon icon={locate}></IonIcon>
            <IonInput placeholder="Type your departure location..."></IonInput>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent className="ion-align-items-center flex">
            <IonIcon icon={pin}></IonIcon>
            <IonInput placeholder="Type your destination..."></IonInput>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent className="ion-align-items-center flex">
            <IonIcon icon={calendar}></IonIcon>
            <IonDatetime
              placeholder="Find the date you want to leave..."
              min={now.toISOString()}
              max="2030-01-01"
            ></IonDatetime>
          </IonCardContent>
        </IonCard>
        <IonImg
          alt="USP"
          src="/assets/usp.svg"
          className="ion-padding"
        ></IonImg>
      </IonContent>

      <IonFooter>
        <div className="ion-padding">
          <IonButton expand="block" size="large" routerLink="/search/results">
            Search
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default SearchScreen;
