import {
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonPage,
  IonInput,
  IonDatetime,
  IonButton,
  IonFooter,
  IonToolbar,
  IonButtons,
  IonImg,
  IonModal,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';
import { pin, locate, calendar } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import './Search.scss';
import Header from '../../components/Header/Header';
import Title from '../../components/Header/Title';
import { RouteComponentProps } from 'react-router';
import { geocode, mapLatLon } from '../../services/searchResults';
import { GeoCodeResponse } from '../../data/geocode';

type ModalType = 'from' | 'to';

interface Props
  extends RouteComponentProps<{
    id: string;
  }> {}

const SearchScreen: React.FC<Props> = props => {
  const [from, setFrom] = useState();
  const [fromCoords, setFromCoords] = useState();
  const [to, setTo] = useState();
  const [toCoords, setToCoords] = useState();
  const [date, setDate] = useState();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalType, setModalType] = useState<ModalType>('from');
  const [geocodeResults, setGeocodeResults] = useState<GeoCodeResponse[]>([]);

  const now = new Date();

  const openModal = (type: ModalType) => {
    setModalType(type);
    setSearchModalOpen(true);
  };

  const search = async (term: string) => {
    if (!searchTerm) {
      return;
    }
    const results = await geocode(term);
    setGeocodeResults(results);
  };

  const selectLocation = (location: GeoCodeResponse) => {
    setSearchTerm('');
    setGeocodeResults([]);
    const term = location.display_name;
    const coords = { lat: location.lat, lon: location.lon };
    if (modalType === 'from') {
      setFrom(term);
      setFromCoords(coords);
    } else {
      setTo(term);
      setToCoords(coords);
    }
    setSearchModalOpen(false);
  };

  useEffect(() => {
    search(searchTerm);
  }, [searchTerm]);

  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start"></IonButtons>
        <Title></Title>
      </IonToolbar>
      <Header>What's your destination?</Header>
      <IonContent slot="fixed">
        <IonCard>
          <IonCardContent className="ion-align-items-center flex">
            <IonIcon icon={locate}></IonIcon>
            <IonInput
              onClick={() => openModal('from')}
              placeholder="Type your departure location..."
              value={from}
              onIonChange={value => setFrom(value.detail.value)}
            ></IonInput>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent className="ion-align-items-center flex">
            <IonIcon icon={pin}></IonIcon>
            <IonInput
              onClick={() => openModal('to')}
              placeholder="Type your destination..."
              value={to}
              onIonChange={value => setTo(value.detail.value)}
            ></IonInput>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent className="ion-align-items-center flex">
            <IonIcon icon={calendar}></IonIcon>
            <IonDatetime
              placeholder="Find the date you want to leave..."
              min={now.toISOString()}
              max="2030-01-01"
              onIonChange={e => setDate(e.detail.value)}
            ></IonDatetime>
          </IonCardContent>
        </IonCard>
        <IonImg
          alt="USP"
          src="/assets/usp.svg"
          className="ion-padding"
        ></IonImg>
        <IonModal isOpen={searchModalOpen}>
          <IonSearchbar
            showCancelButton="always"
            value={searchTerm}
            onIonCancel={() => setSearchModalOpen(false)}
            onIonChange={value => setSearchTerm(value.detail.value!)}
          ></IonSearchbar>
          <IonList>
            {geocodeResults.map((result, i) => (
              <IonItem key={i} onClick={() => selectLocation(result)}>
                <IonLabel className="ion-text-wrap">
                  {result.display_name}
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonModal>
      </IonContent>

      <IonFooter>
        <div className="ion-padding">
          <IonButton
            expand="block"
            size="large"
            onClick={() =>
              props.history.push('/search/results', {
                to,
                toCoords,
                from,
                fromCoords,
                date
              })
            }
          >
            Search
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default SearchScreen;
