import React from 'react';
import SearchResultJourneyStep from './SearchResultJourneyStep';

const SearchResultJourney: React.FC = () => {
  return (
    <div>
      <div className="flex">
        {[1, 2, 3].map(i => (
          <SearchResultJourneyStep key={i}></SearchResultJourneyStep>
        ))}
      </div>
      <div className="ion-padding">
        <div className="divider"></div>
        <div
          className="flex ion-justify-content-end ion-align-items-baseline ion-padding-top"
          style={{ color: 'black' }}
        >
          Total price
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            &nbsp;£168
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchResultJourney;