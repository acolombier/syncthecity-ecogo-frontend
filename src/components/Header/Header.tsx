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
        <div className="header-text above-text">{aboveText}</div>
      ) : null}
      <div className="header-text main-text">{children}</div>
    </div>
  );
};

export default Header;
