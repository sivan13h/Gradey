import React, { useState, createContext } from "react";
import data from "../services/database";

export const GradesContext = createContext();

export function GradesProvider(props) {
  const [grades, setGrades] = useState(data);

  return (
    <GradesContext.Provider value={{ grades, setGrades }}>
      {props.children}
    </GradesContext.Provider>
  );
}
