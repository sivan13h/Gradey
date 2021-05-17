import React, { useContext } from "react";
import { Layout, Breadcrumb } from "antd";

import Chart from "../../components/Chart/Chart";

import { GradesContext } from "../../context/GradesContext";

function MainContent(props) {
  const { Content } = Layout;
  const { grades } = useContext(GradesContext);

  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }} />
      <div
        className="site-layout-background"
        style={{ padding: 24, height: "500px" }}
      >
        <h1 className="chart-header">My Statistics</h1>
        <Chart />
        <div className="calcs">
          <div>
            Total Credits:{" "}
            {grades
              .map((grade) => parseFloat(grade.credits))
              .reduce((a, b) => {
                return a + b;
              })}
          </div>
          <div>
            Average Grade:{" "}
            {(
              grades
                .map((grade) => parseFloat(grade.grade))
                .reduce((a, b) => {
                  return a + b;
                }) / grades.length
            ).toFixed(1)}
          </div>
        </div>
      </div>
    </Content>
  );
}

export default MainContent;
