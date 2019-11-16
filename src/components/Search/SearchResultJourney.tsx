import React from 'react';
import SearchResultJourneyStep from './SearchResultJourneyStep';
import { JourneyResult } from '../../services/searchResults';
import { IonIcon } from '@ionic/react';
import { timer } from 'ionicons/icons';
import { getDuration } from '../../services/helpers';

interface Props {
  journeyResult: JourneyResult;
}

const SearchResultJourney: React.FC<Props> = props => {
  return (
    <div>
      <div className="flex">
        {props.journeyResult.steps.map((step, index) => (
          <SearchResultJourneyStep
            step={step}
            key={index}
          ></SearchResultJourneyStep>
        ))}
      </div>
      <div className="ion-padding">
        <div className="divider"></div>
        <div
          className="flex ion-justify-content-between ion-align-items-center ion-padding-top"
          style={{ color: 'black' }}
        >
          <div className="total-time">
            <IonIcon icon={timer}></IonIcon>
            &nbsp;
            {getDuration(props.journeyResult.duration)}
          </div>
          <div className="flex ion-justify-content-between ion-align-items-baseline">
            <div>Total price</div>
            <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
              &nbsp;{`£${props.journeyResult.cost / 100}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultJourney;
