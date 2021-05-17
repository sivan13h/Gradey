import React, { useContext, useState } from "react";
import { Layout, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddGradeForm from "../../components/AddGradeForm/AddGradeForm";
import EditGradesForm from "../../components/EditGradesForm/EditGradesForm";
import { GradesContext } from "../../context/GradesContext";

import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../components/MainContent/MainContent";

import "./HomePage.styles.scss";

const { Header, Sider } = Layout;

function HomePage() {
  const { grades } = useContext(GradesContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clickedEdit, setClickedEdit] = useState(false);

  const handleClick = (e) => {
    if (e.target.innerText === "Add new grade") {
      setClickedEdit(false);
      showModal();
    } else {
      setClickedEdit(true);
      showModal();
    }
  };

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
          <Button
            type="primary"
            name="add"
            onClick={handleClick}
            icon={<PlusOutlined />}
          >
            Add new grade
          </Button>
          <Button
            type="secondary"
            onClick={handleClick}
            name="edit"
            icon={<PlusOutlined />}
          >
            Edit grades
          </Button>
        </Header>
        <MainContent
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {!clickedEdit ? <AddGradeForm /> : <EditGradesForm />}
        </Modal>
      </Layout>
    </Layout>
  );
}

export default HomePage;
