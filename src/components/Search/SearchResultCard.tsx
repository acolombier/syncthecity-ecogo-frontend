import React, { ReactNode, PropsWithChildren } from 'react';
import { IonCard, IonCardHeader, IonCardContent } from '@ionic/react';

interface Props {
  header: ReactNode;
}

const SearchResultCard: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { children, header } = props;
  return (
    <IonCard>
      <IonCardHeader color="primary">{header}</IonCardHeader>
      <IonCardContent>{children}</IonCardContent>
    </IonCard>
  );
};

export default SearchResultCard;
