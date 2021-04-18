import React, { useContext, useState } from "react";
import { Layout, Menu, Breadcrumb, Button, Modal } from "antd";
import { UserOutlined, LogoutOutlined, PlusOutlined } from "@ant-design/icons";
import { UserContext } from "../../context/UserContext";
import { GradesContext } from "../../context/GradesContext";
import Chart from "../../components/Chart/Chart";
import AddGradeForm from "../../components/AddGradeForm/AddGradeForm";
import "./HomePage.styles.scss";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function HomePage() {
  const { updateCurrUser } = useContext(UserContext);
  const { grades } = useContext(GradesContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLogout = () => {
    localStorage.setItem("currentUser", "");
    updateCurrUser("");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo">Gradey</div>
        <Menu
          className="menu"
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          {grades.map((grade) => (
            <SubMenu key={grade.id} icon={<UserOutlined />} title={grade.name}>
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
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button type="secondary" onClick={showModal} icon={<PlusOutlined />}>
            Add new grade
          </Button>
        </Header>
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
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <AddGradeForm />
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
}

export default HomePage;
