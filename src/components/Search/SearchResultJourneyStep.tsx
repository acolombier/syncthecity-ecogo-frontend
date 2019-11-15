import React from 'react';
import './SearchResultJourneyStep.scss';

const SearchResultJourneyStep: React.FC = () => {
  return (
    <div className="flex flex-direction-column column">
      <div className="type">Train</div>
      <div className="time from-time">14:40</div>
      <div className="from">London</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="time to-time">15:50</div>
      <div className="to">Paris</div>
    </div>
  );
};

export default SearchResultJourneyStep;
