import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [currUser, setCurrUser] = useState("");

  const updateCurrUser = (jwt) => {
    setCurrUser(jwt);
  };
  useEffect(() => {
    const currUserJwt = localStorage.getItem("currentUser");

    if (currUserJwt) {
      setCurrUser(currUserJwt);
    }
  }, []);

  return (
    <UserContext.Provider value={{ currUser, updateCurrUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
