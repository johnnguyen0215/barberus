import { useState, ReactElement } from 'react';
import { UserContext } from '../contexts/userContext';
import { AppProps } from 'next/app';
import '../styles/globals.scss';

const BarberusApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = () => {
    return { ...userInfo };
  };

  return (
    <UserContext.Provider
      value={{
        setUserInfo,
        getUserInfo
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default BarberusApp;
