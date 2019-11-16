import React, { PropsWithChildren } from 'react';
import { IonImg } from '@ionic/react';
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
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default Header;
