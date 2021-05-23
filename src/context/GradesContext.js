import React, { useState, createContext, useEffect } from "react";
import { Spin } from "antd";
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
        <div
          style={{
            position: "absolute",
            top: "46%",
            left: "46%",
            textAlign: "center",
          }}
        >
          <Spin size="large" style={{ marginBottom: "1rem" }} />
          <h3>Loading...</h3>
        </div>
      ) : (
        <GradesContext.Provider value={{ grades, setGrades }}>
          {props.children}
        </GradesContext.Provider>
      )}
    </div>
  );
}
