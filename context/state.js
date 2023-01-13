import { createContext, useContext } from 'react';

const AppContext = createContext();

export function useCartContext() {
  return useContext(AppContext);
}

export default AppContext;
