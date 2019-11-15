import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonInput,
  IonDatetime,
  IonButton,
  IonFooter,
  IonToolbar
} from '@ionic/react';
import { pin, locate, calendar } from 'ionicons/icons';
import React from 'react';
import './Search.scss';

const SearchScreen: React.FC = () => {
  const now = new Date();
  return (
    <IonPage>
      <IonHeader>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle>UGoEco</IonCardSubtitle>
            <IonCardTitle>What's your destination?</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonHeader>
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
      </IonContent>

      <IonFooter>
        <div className="ion-padding">
          <IonButton expand="block" size="large">
            Search
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default SearchScreen;
