import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [currUser, setCurrUser] = useState("");

  useEffect(() => {
    const currUserJwt = localStorage.getItem("currentUser");

    if (currUserJwt) {
      setCurrUser(currUserJwt);
    }
  }, []);

  return (
    <UserContext.Provider value={{ currUser, setCurrUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
