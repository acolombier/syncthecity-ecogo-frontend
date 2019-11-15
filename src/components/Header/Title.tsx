import React, { PropsWithChildren } from 'react';
import { IonTitle } from '@ionic/react';

interface Props {}

const Title: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return <IonTitle>{props.children ? props.children : 'You Go Eco'}</IonTitle>;
};

export default Title;
