import { createContext } from 'react';

export type PendingContextType = {
  pending: boolean;
  setPending: (pending: boolean) => void;
};

export const PendingContext = createContext({
  pending: false,
  setPending: (pending: boolean) => {
    console.warn('No pending setter provided', pending);
  }
});
