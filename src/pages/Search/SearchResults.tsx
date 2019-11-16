import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonRouterLink,
  IonLoading,
  IonImg
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { sortBy } from 'lodash';
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
  const toParam =
    props && props.location && props.location.state
      ? props.location.state.to
      : '';
  const fromParam =
    props && props.location && props.location.state
      ? props.location.state.from
      : '';
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
        setResults(sortBy(response, 'co2'));
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
    return (
      <>
        <div className="ion-padding">
          <IonImg alt="Eco message" src="/assets/search-tabs.svg"></IonImg>
        </div>
        {results.map((result, i) => (
          <IonRouterLink key={i} onClick={() => props.history.push(`/search/journeys/${i}`, result)}>
            <div style={{ paddingBottom: '.5rem' }}>
              <SearchResultCard header={`${result.co2.toFixed(1)}kg of carbon`}>
                <SearchResultJourney
                  journeyResult={result}
                ></SearchResultJourney>
              </SearchResultCard>
            </div>
          </IonRouterLink>
        ))}
      </>
    );
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
