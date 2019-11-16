import React, { ReactNode, PropsWithChildren } from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonIcon } from '@ionic/react';
import { leaf } from 'ionicons/icons';

interface Props {
  header: ReactNode;
  forceFullWidh?: boolean;
}

const SearchResultCard: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { children, header, forceFullWidh } = props;
  return (
    <IonCard
      style={{ width: forceFullWidh ? '100%' : 'auto', marginBottom: '3rem' }}
    >
      <IonCardHeader color="primary" className="flex ion-align-items-center">
        <IonIcon icon={leaf} className="ion-margin-end"></IonIcon>
        {header}
      </IonCardHeader>
      <IonCardContent className="ion-no-padding">{children}</IonCardContent>
    </IonCard>
  );
};

export default SearchResultCard;
