import { createContext, useReducer } from 'react';
import StoreReducer, { InitialStore } from './StoreReducer';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(StoreReducer, InitialStore);
  return <StoreContext.Provider value={[store, dispatch]}>{children}</StoreContext.Provider>;
};

export { StoreContext };
export default StoreProvider;
