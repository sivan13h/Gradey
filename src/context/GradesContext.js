import React, { useState, createContext, useEffect } from "react";

import { getGrades } from "../services/dataMethods";
export const GradesContext = createContext();

export function GradesProvider(props) {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (grades.length === 0) {
      const fetchGrades = async () => {
        const fetchedGrades = await getGrades();
        await setGrades(fetchedGrades);
        loading && setLoading(false);
      };
      fetchGrades();
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grades]);

  return (
    <div>
      {loading ? (
        <div>loading </div>
      ) : (
        <GradesContext.Provider value={{ grades, setGrades }}>
          {props.children}
        </GradesContext.Provider>
      )}
    </div>
  );
}
