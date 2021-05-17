import React, { useContext } from "react";
import { Menu, Button } from "antd";
import { UserContext } from "../../context/UserContext";
import { ReadOutlined, LogoutOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export default function Sidebar(props) {
  const { setCurrUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.setItem("currentUser", "");
    setCurrUser("");
  };
  return (
    <>
      <div className="logo">Gradey</div>
      <Menu
        className="menu"
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        {props.grades.map((grade) => (
          <SubMenu key={grade.id} icon={<ReadOutlined />} title={grade.name}>
            <Menu.Item key="3">Grade: {grade.grade}</Menu.Item>
            <Menu.Item key="4">Credits: {grade.credits}</Menu.Item>
            <Menu.Item key="5">Status: {grade.status}</Menu.Item>
            <Menu.Item key="6">Date: {grade.date}</Menu.Item>
          </SubMenu>
        ))}
      </Menu>
      <Button onClick={handleLogout} type="primary" icon={<LogoutOutlined />}>
        Logout
      </Button>
    </>
  );
}
