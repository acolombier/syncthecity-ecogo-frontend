import React, { PropsWithChildren } from 'react';
import { IonImg, IonButtons, IonBackButton, IonToolbar } from '@ionic/react';
import './Header.scss';

interface Props {}

const Header: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { children } = props;
  return (
    <>
      <div className="container">
        <IonImg src="/assets/blue-wave.svg" alt="Blue wave"></IonImg>
        <div className="header-text main-text">{children}</div>
      </div>
    </>
  );
};

export default Header;
