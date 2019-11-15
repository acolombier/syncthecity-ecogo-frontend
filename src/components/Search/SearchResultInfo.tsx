import React from 'react';
import { IonCard, IonCardContent, IonIcon } from '@ionic/react';
import { pin } from 'ionicons/icons';

interface Props {
  from: string;
  to: string;
  date: string;
}

const SearchResultInfo: React.FC<Props> = (props: Props) => {
  const { from, to, date } = props;
  return (
    <IonCard color="primary">
      <IonCardContent className="ion-align-items-center ion-justify-content-between flex">
        <div>
          <b style={{ fontSize: '1.2rem' }}>
            {from} to {to}
          </b>
          <p>{date}</p>
        </div>
        <div className="">
          <IonIcon icon={pin} size="large"></IonIcon>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default SearchResultInfo;
