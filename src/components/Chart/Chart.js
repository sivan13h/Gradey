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
  Text,
} from "recharts";
import { GradesContext } from "../../context/GradesContext";

class CustomizedAxisTick extends React.Component {
  render() {
    const { x, y, payload } = this.props;

    return (
      <Text x={x} y={y} width={75} textAnchor="middle" verticalAnchor="start">
        {`${payload.value.substr(0, 5)}...`}
      </Text>
    );
  }
}

export default function Chart() {
  const { grades } = useContext(GradesContext);
  const data = grades.map((grade) => ({
    // name: `${grade.name.substr(0, 8)}...`,
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
        barCategoryGap={10}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis
          dataKey="name"
          minTickGap={-100}
          label={(props) => <Text width={30}>{props.text}</Text>}
        /> */}
        <XAxis
          dataKey="name"
          interval={0}
          tick={<CustomizedAxisTick />}
          height={50}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="grade" fill="#8884d8" maxBarSize={20} />
        <Bar dataKey="credits" fill="#82ca9d" maxBarSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}
