import React, { useContext, useState } from "react";
import { Layout, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { GradesContext } from "../../context/GradesContext";

import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../components/MainContent/MainContent";

import "./HomePage.styles.scss";

const { Header, Sider } = Layout;

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
        <MainContent
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </Layout>
    </Layout>
  );
}

export default HomePage;
