import React, { useContext, useState } from "react";
import { Layout, Breadcrumb, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { GradesContext } from "../../context/GradesContext";
import Chart from "../../components/Chart/Chart";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddGradeForm from "../../components/AddGradeForm/AddGradeForm";
import "./HomePage.styles.scss";

const { Header, Content, Sider } = Layout;

function HomePage() {
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

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Sidebar grades={grades} />
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
