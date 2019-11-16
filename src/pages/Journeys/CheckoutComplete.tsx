import React from 'react';
import {
  IonPage,
  IonToolbar,
  IonButtons,
  IonContent,
  IonIcon
} from '@ionic/react';
import { thumbsUp } from 'ionicons/icons';
import Title from '../../components/Header/Title';
import Header from '../../components/Header/Header';

const CheckoutComplete: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start"></IonButtons>
        <Title></Title>
      </IonToolbar>
      <Header>Complete</Header>
      <IonContent>
        <div
          className="flex ion-justify-content-center ion-align-items-center flex-direction-column"
          style={{ height: '100%' }}
        >
          <IonIcon
            size="large"
            icon={thumbsUp}
            style={{ height: '100px', width: '100%' }}
          ></IonIcon>
          <div className="ion-text-center">
            <h2>Congratulations!</h2>
            <p>Your booking is complete</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CheckoutComplete;
