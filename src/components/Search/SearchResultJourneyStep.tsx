import React from 'react';
import './SearchResultJourneyStep.scss';
import { Step } from '../../services/searchResults';

interface Props {
  step: Step;
}

const SearchResultJourneyStep: React.FC<Props> = props => {
  return (
    <div className="flex flex-direction-column column">
      <div className="type">{props.step.steps[0].type.toUpperCase()}</div>
      <div className="time from-time">{new Date(props.step.startDateTime).toLocaleDateString()}</div>
      <div className="from">{props.step.steps[0].departurePoint.commonName}</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="time to-time">{new Date(props.step.arrivalDateTime).toLocaleDateString()}</div>
      <div className="to">{props.step.steps[0].arrivalPoint.commonName}</div>
    </div>
  );
};

export default SearchResultJourneyStep;
