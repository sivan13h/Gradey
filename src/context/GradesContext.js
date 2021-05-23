import React, { useState, createContext, useEffect } from "react";
import { getGrades } from "../services/dataMethods";
export const GradesContext = createContext();

export function GradesProvider(props) {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGrades = async () => {
      const fetchedGrades = await getGrades();
      setGrades(fetchedGrades);
      loading && setLoading(false);
    };
    fetchGrades();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grades.length]);

  return (
    <div>
      <GradesContext.Provider value={{ grades, setGrades }}>
        {props.children}
      </GradesContext.Provider>
    </div>
  );
}
