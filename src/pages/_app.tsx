import { useState, ReactElement } from 'react';
import { UserContext } from '../contexts/userContext';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';

import { PendingContext } from '../contexts/pendingContext';
import { ErrorContext } from '../contexts/errorContext';
import { Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const BarberusApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const [userInfo, setUserInfo] = useState({});

  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(!!errorMessage);

  const getUserInfo = () => {
    return { ...userInfo };
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowError(false);
  };

  return (
    <UserContext.Provider
      value={{
        setUserInfo,
        getUserInfo
      }}
    >
      <PendingContext.Provider
        value={{
          pending,
          setPending
        }}
      >
        <ErrorContext.Provider
          value={{
            errorMessage,
            showError,
            setErrorMessage,
            setShowError
          }}
        >
          <Head>
            <title>Barberus</title>
          </Head>
          <Component {...pageProps} />
          <Backdrop className="backdrop" open={pending}>
            <CircularProgress color="secondary" />
          </Backdrop>
          <Snackbar open={showError} onClose={handleClose}>
            <Alert severity="error" onClose={handleClose}>
              {errorMessage}
            </Alert>
          </Snackbar>
        </ErrorContext.Provider>
      </PendingContext.Provider>
    </UserContext.Provider>
  );
};

export default BarberusApp;
