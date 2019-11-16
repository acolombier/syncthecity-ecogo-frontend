import React from 'react';
import './SearchResultJourneyStep.scss';
import { Step } from '../../services/searchResults';

interface Props {
  step: Step;
}

const SearchResultJourneyStep: React.FC<Props> = props => {
  return (
    <div className="flex flex-direction-column column ion-justify-content-between">
      <div className="type">{props.step.steps[0].type.toUpperCase()}</div>
      <div className="time from-time">{`${new Date(props.step.startDateTime).getHours().toString().padStart(2,'0')}:${new Date(props.step.startDateTime).getMinutes().toString().padStart(2,'0')}`}</div>
      <div className="from">{props.step.steps[0].departurePoint.commonName}</div>
      <div className="dot">.</div>
      <div className="dot">{props.step.steps.length > 1 ? `${props.step.steps.length - 1} change` : '.'}</div>
      <div className="dot">.</div>
      <div className="time to-time">{`${new Date(props.step.arrivalDateTime).getHours().toString().padStart(2,'0')}:${new Date(props.step.arrivalDateTime).getMinutes().toString().padStart(2,'0')}`}</div>
      <div className="to">{props.step.steps[props.step.steps.length-1].arrivalPoint.commonName}</div>
    </div>
  );
};

export default SearchResultJourneyStep;
