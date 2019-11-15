import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent } from '@ionic/react';

const AchievementsScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Achievements</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent />
    </IonPage>
  );
};

export default AchievementsScreen;
