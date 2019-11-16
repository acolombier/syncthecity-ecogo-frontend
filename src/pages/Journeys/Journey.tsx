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
import { RouteComponentProps } from 'react-router';
import { JourneyResult } from '../../services/searchResults';

interface Props extends RouteComponentProps {}

const JourneyScreen: React.FC<Props> = props => {
  const journey: JourneyResult = props.location.state;
  if (!journey || !journey.steps) return null;

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
          {journey.steps.map((step, index) => {
            return (
              <IonSlide key={index}>
                <SearchResultCard
                  forceFullWidh
                  header={
                    <div className="ion-text-center">{step.steps[0].type}</div>
                  }
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
            onClick={() => {
              createFeedItem();
              props.history.push('/search/checkout');
            }}
          >
            <p className="ion-text-start" style={{ flex: 1 }}>
              Checkout
            </p>
            <b className="ion-text-end" style={{ flex: 1 }}>
              {`£${(journey.cost / 100).toFixed(2)}`}
            </b>
            <div className="flex ion-justify-content-between"></div>
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default JourneyScreen;
