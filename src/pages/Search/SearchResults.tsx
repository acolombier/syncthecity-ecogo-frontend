import React from 'react';
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import SearchResultCard from '../../components/Search/SearchResultCard';
import Header from '../../components/Header/Header';
import Title from '../../components/Header/Title';
import SearchResultInfo from '../../components/Search/SearchResultInfo';
import SearchResultJourney from '../../components/Search/SearchResultJourney';

const list = [1, 2, 3];

const SearchResultsScreen: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/search" />
        </IonButtons>
        <Title></Title>
      </IonToolbar>
      <IonContent>
        <Header>
          <SearchResultInfo
            from="London"
            to="Paris"
            date="Friday, 3 December 2019"
          ></SearchResultInfo>
        </Header>
        {list.map(i => (
          <div
            key={i}
            style={{ paddingBottom: '1rem' }}
            className="ion-padding"
          >
            <SearchResultCard header="Greener choice - 16% less CO2">
              <SearchResultJourney></SearchResultJourney>
            </SearchResultCard>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default SearchResultsScreen;
