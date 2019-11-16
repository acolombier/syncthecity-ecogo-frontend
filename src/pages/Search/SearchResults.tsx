import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonRouterLink
} from '@ionic/react';
import SearchResultCard from '../../components/Search/SearchResultCard';
import Header from '../../components/Header/Header';
import Title from '../../components/Header/Title';
import SearchResultInfo from '../../components/Search/SearchResultInfo';
import SearchResultJourney from '../../components/Search/SearchResultJourney';
import { fetchSearchResults } from '../../services/searchResults';
import { RouteComponentProps } from 'react-router';

const list = [1, 2, 3];

interface Props extends RouteComponentProps {}

const SearchResultsScreen: React.FC<Props> = props => {
  const [results, setResults] = useState(null);
  const [loadng, setLoading] = useState(false);

  const getSearchResults = async () => {
    const response = await fetchSearchResults(
      props.location.state.to,
      props.location.state.from
    );
    console.log(response);
    setResults(response);
    setLoading(false);
  };

  useEffect(() => {
    console.log(props);
    setLoading(true);
    getSearchResults();
  }, []);

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
          <IonRouterLink key={i} routerLink={`/search/journeys/${i}`}>
            <div style={{ paddingBottom: '.5rem' }}>
              <SearchResultCard header="Greener choice - 16% less CO2">
                <SearchResultJourney></SearchResultJourney>
              </SearchResultCard>
            </div>
          </IonRouterLink>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default SearchResultsScreen;
