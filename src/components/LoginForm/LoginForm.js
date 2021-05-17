import { useContext } from "react";
import { Form, Input, Button } from "antd";
import { authenticate } from "../../services/authenticate";
import { UserContext } from "../../context/UserContext";
import "./LoginForm.styles.scss";

const LoginForm = () => {
  const { setCurrUser } = useContext(UserContext);

  const onFinish = (values) => {
    const jwt = authenticate(values.username, values.password);
    localStorage.setItem("currentUser", jwt);
    setCurrUser(jwt);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        className="form"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1 className="form-header">Please Sign-up or Log-in</h1>
        <Form.Item
          className="form-field"
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="form-field"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="form-submit">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
