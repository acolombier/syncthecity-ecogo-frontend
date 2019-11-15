import React, { useEffect } from 'react';
import { IonSlides, IonSlide, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { JourneyStep } from '../../../data/journeys';
import { LatLon } from '../../../components/Map';

interface Props {
  journeySteps: JourneyStep[];
  updateMarkers: (markers: LatLon[]) => void;
}

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0
};

export const JourneyStepSlides: React.FC<Props> = (props) => {
  useEffect(() => {
    updateMarkerHandler();
  }, []);

  const slideChange = (event: any) => {
    console.log(event);
  }

  const updateMarkerHandler = () => {
    const markers: LatLon[] = [
      {
        latitude: props.journeySteps[0].from.latitude,
        longitude: props.journeySteps[0].from.longitude
      },
      {
        latitude: props.journeySteps[0].to.latitude,
        longitude: props.journeySteps[0].to.longitude
      }
    ];

    props.updateMarkers(markers);
  }
  
  return (
    <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={slideChange}>
      {
        props.journeySteps.map(step => (
          <IonSlide>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>{step.mode}</IonCardSubtitle>
                <IonCardTitle>{`${step.from.city} to ${step.to.city}`}</IonCardTitle>
              </IonCardHeader>
              <img src={`https://source.unsplash.com/400x225/?${step.mode}`} />
            </IonCard>
          </IonSlide>
        ))
      }
    </IonSlides>
  )
};
