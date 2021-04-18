import React, { useContext } from "react";
import GradeDetails from "../../components/GradeDetails/GradeDetails";
import GradesContext from "../../context/GradesContext";
import "./Sidebar.styles.scss";

export default function Sidebar() {
  const { gradesData } = useContext(GradesContext);
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {gradesData.map((grade) => (
          <GradeDetails data={grade} />
        ))}
      </ul>
    </div>
  );
}
