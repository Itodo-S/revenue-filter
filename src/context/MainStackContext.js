import React, { useContext, useReducer, createContext, useEffect } from "react";
import { userReducer } from "../reducers/userReducer";
import { fetchUser } from "../apis/apis";

const initialState = {
  user: {},
};

const MainStackContext = createContext(initialState);

export const MainStackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    dispatch({ type: "START_LOADING" });

    const fetchUserData = async () => {
      try {
        const userData = await fetchUser();
        dispatch({ type: "FETCH_USER", payload: userData });
      } catch (error) {
        console.error("Error fetching user:", error);
      }

      dispatch({ type: "END_LOADING" });
    };

    fetchUserData();
  }, []);

  const value = {
    user: state.user,
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
