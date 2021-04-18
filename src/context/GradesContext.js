import React, { useState, createContext, useEffect } from "react";
import data from "../services/database";

export const GradesContext = createContext();

export function GradesProvider(props) {
  const [grades, setGrades] = useState(data);

  // const updateGrades = (updatedGrades) => {
  //   setGrades(updatedGrades);
  //   localStorage.setItem("grades", JSON.stringify(updatedGrades));
  // };

  return (
    <GradesContext.Provider value={{ grades, setGrades }}>
      {props.children}
    </GradesContext.Provider>
  );
}
