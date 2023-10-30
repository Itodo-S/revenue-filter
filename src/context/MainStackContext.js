import React, { useContext, useReducer, createContext, useEffect } from "react";
import { userReducer } from "../reducers/userReducer";
import { fetchUser, fetchWallet } from "../apis/apis";
import { walletReducer } from "../reducers/walletReducer";

const initialState = {
  user: {},
  wallet: {},
  isLoading: false,
};

const MainStackContext = createContext(initialState);

export const MainStackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => ({
      user: userReducer(prevState.user, action),
      wallet: walletReducer(prevState.wallet, action),
      isLoading: prevState.isLoading,
    }),
    initialState
  );

  useEffect(() => {
    dispatch({ type: "START_LOADING" });

    const fetchData = async () => {
      try {
        const userData = await fetchUser();
        dispatch({ type: "FETCH_USER", payload: userData });

        const walletData = await fetchWallet();
        dispatch({ type: "FETCH_WALLET", payload: walletData });
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      dispatch({ type: "END_LOADING" });
    };

    fetchData();
  }, []);

  const value = {
    user: state.user,
    wallet: state.wallet,
    isLoading: state.isLoading,
  };

  return (
    <MainStackContext.Provider value={value}>
      {children}
    </MainStackContext.Provider>
  );
};

export const useMainStack = () => {
  const context = useContext(MainStackContext);
  return context;
};
