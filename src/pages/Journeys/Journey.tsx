import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonSlides,
  IonSlide,
  IonFooter,
  IonButton,
  IonImg
} from '@ionic/react';
import Title from '../../components/Header/Title';
import Header from '../../components/Header/Header';
import SearchResultInfo from '../../components/Search/SearchResultInfo';
import SearchResultCard from '../../components/Search/SearchResultCard';
import JourneyStep from '../../components/Journey/JourneyStep';
import { createFeedItem } from '../../services/monzo';

const JourneyScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/search" />
          </IonButtons>
          <Title></Title>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Header>
          <SearchResultInfo
            from="London"
            to="Paris"
            date="Friday, 3 December 2019"
          ></SearchResultInfo>
        </Header>
        <IonImg alt="Eco message" src="/assets/trees-saved.svg"></IonImg>
        <IonSlides pager>
          {[1, 2, 3].map(s => {
            return (
              <IonSlide key={s}>
                <SearchResultCard
                  forceFullWidh
                  header={<div className="ion-text-center">Train</div>}
                >
                  <JourneyStep></JourneyStep>
                </SearchResultCard>
              </IonSlide>
            );
          })}
        </IonSlides>
      </IonContent>

      <IonFooter>
        <div className="ion-padding">
          <IonButton
            expand="block"
            color="danger"
            className="flex ion-justify-content-between"
            onClick={() => createFeedItem()}
          >
            <p className="ion-text-start" style={{ flex: 1 }}>
              Checkout
            </p>
            <b className="ion-text-end" style={{ flex: 1 }}>
              £219.80
            </b>
            <div className="flex ion-justify-content-between"></div>
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default JourneyScreen;
