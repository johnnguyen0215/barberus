import { createContext } from 'react';

export type ErrorContextType = {
  errorMessage: string;
  showError: boolean;
  setErrorMessage: (errorMessage: string) => void;
  setShowError: (show: boolean) => void;
};

export const ErrorContext = createContext<ErrorContextType>({
  errorMessage: '',
  showError: false,
  setErrorMessage: (errorMessage = '') => {
    console.warn('No error message setter provided', errorMessage);
  },
  setShowError: (show: boolean) => {
    console.warn('No show error setter provided', show);
  }
});
