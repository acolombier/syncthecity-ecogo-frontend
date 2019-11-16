import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonRouterLink,
  IonLoading
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import SearchResultCard from '../../components/Search/SearchResultCard';
import Header from '../../components/Header/Header';
import Title from '../../components/Header/Title';
import SearchResultInfo from '../../components/Search/SearchResultInfo';
import SearchResultJourney from '../../components/Search/SearchResultJourney';
import {
  fetchSearchResults,
  JourneyResult
} from '../../services/searchResults';

interface Props extends RouteComponentProps {}

const SearchResultsScreen: React.FC<Props> = props => {
  const toParam = props.location.state.to;
  const fromParam = props.location.state.from;
  const toParts = (toParam || '').split(',');
  const fromParts = (fromParam || '').split(',');
  const to = toParts[0];
  const from = fromParts[0];

  const [results, setResults] = useState<JourneyResult[]>([]);
  const [loading, setLoading] = useState(false);

  const getSearchResults = async () => {
    setLoading(true);
    fetchSearchResults(to, from)
      .then(response => {
        setResults(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getSearchResults();
  }, []);

  const renderLoading = () => {
    return (
      <IonLoading
        isOpen={loading}
        message={'🌳 Finding you the best route...'}
      />
    );
  };

  const renderResults = () => {
    return results.map((result, i) => (
      <IonRouterLink key={i} routerLink={`/search/journeys/${i}`}>
        <div style={{ paddingBottom: '.5rem' }}>
          <SearchResultCard header="Greener choice - 16% less CO2">
            <SearchResultJourney journeyResult={result}></SearchResultJourney>
          </SearchResultCard>
        </div>
      </IonRouterLink>
    ));
  };

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
            from={from}
            to={to}
            date="Friday, 3 December 2019"
          ></SearchResultInfo>
        </Header>
        {loading ? renderLoading() : renderResults()}
      </IonContent>
    </IonPage>
  );
};

export default SearchResultsScreen;
