import React, { useRef, useEffect } from 'react';
import { arrowForward, person, timer } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import qr from 'qrcode-generator';
import './JourneyStep.scss';

const JourneyStep: React.FC = () => {
  const code = qr(7, 'L');
  code.addData('Train ticket');
  code.make();

  return (
    <div className="ion-padding">
      <div className="flex ion-justify-content-around ion-align-items-center ion-padding-bottom">
        <div className="column">
          <div className="time from-time">14:40</div>
          <div className="from">London</div>
        </div>
        <div className="column">
          <div>1 change</div>
          <IonIcon icon={arrowForward}></IonIcon>
        </div>
        <div className="column">
          <div className="time to-time">15:50</div>
          <div className="to">Paris</div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex ion-justify-content-around ion-align-items-baseline middle-detail">
        <div className="people">
          <IonIcon icon={person}></IonIcon> 1
        </div>
        <div className="total-time">
          <IonIcon icon={timer}></IonIcon> 2h 12m
        </div>
        <div className="price">£56.60</div>
      </div>

      <div className="divider"></div>

      <div
        id="qr"
        className="qr"
        dangerouslySetInnerHTML={{ __html: code.createImgTag() }}
      ></div>
    </div>
  );
};

export default JourneyStep;
