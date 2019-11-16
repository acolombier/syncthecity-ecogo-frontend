import React, { PropsWithChildren } from 'react';
import { IonTitle, IonIcon } from '@ionic/react';
import { leaf } from 'ionicons/icons';

interface Props {}

const Title: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <IonTitle>
      {props.children ? props.children : 'U GO ECO'}
      &nbsp;
      <IonIcon icon={leaf}></IonIcon>{' '}
    </IonTitle>
  );
};

export default Title;
