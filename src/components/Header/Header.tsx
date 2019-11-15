import React, { PropsWithChildren } from 'react';
import { IonImg } from '@ionic/react';
import './Header.scss';

interface Props {
  aboveText?: string;
}

const Header: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { children, aboveText } = props;
  return (
    <div className="container">
      <IonImg src="/assets/blue-wave.svg"></IonImg>
      {aboveText ? (
        <h3 className="header-text above-text">{aboveText}</h3>
      ) : null}
      <h1 className="header-text main-text">{children}</h1>
    </div>
  );
};

export default Header;
