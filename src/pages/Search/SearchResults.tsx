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
      <Header>Results</Header>
      <IonContent>
        // Journey Name + Date // Tab selector
        {list.map(i => (
          <SearchResultCard key={i} header={<div>test</div>}>
            Hi
          </SearchResultCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default SearchResultsScreen;
