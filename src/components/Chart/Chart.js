import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GradesContext } from "../../context/GradesContext";

export default function Chart() {
  const { grades } = useContext(GradesContext);
  const data = grades.map((grade) => ({
    name: grade.name,
    grade: parseFloat(grade.grade),
    credits: parseFloat(grade.credits),
  }));
  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" minTickGap={-100} angle={10} dx={15} dy={10} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="grade" fill="#8884d8" />
        <Bar dataKey="credits" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
