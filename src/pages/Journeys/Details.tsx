import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonSlides, IonSlide, IonCard, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

interface JourneyDetailPageProps extends RouteComponentProps<{
  id: string;
}> { }

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const Details: React.FC<JourneyDetailPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/journeys" />
          </IonButtons>
          <IonTitle>Journey Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <IonCard>
              <IonItem class="activated">
                <IonIcon name="warning" slot="start" />
                <IonLabel>{match.params.id}</IonLabel>
              </IonItem>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard>
              <IonItem class="activated">
                <IonIcon name="warning" slot="start" />
                <IonLabel>{match.params.id}</IonLabel>
              </IonItem>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard>
              <IonItem class="activated">
                <IonIcon name="warning" slot="start" />
                <IonLabel>{match.params.id}</IonLabel>
              </IonItem>
            </IonCard>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Details;
