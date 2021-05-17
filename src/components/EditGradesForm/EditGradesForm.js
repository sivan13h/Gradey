import { useContext, useState } from "react";
import {
  getGrades,
  updateGrade,
  deleteGrade,
} from "../../services/dataMethods";
import { Form, InputNumber, Button, Select } from "antd";

import { GradesContext } from "../../context/GradesContext";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const EditGradesForm = () => {
  const { grades, setGrades } = useContext(GradesContext);
  const [gradeToEdit, setGradeToEdit] = useState("");
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    await updateGrade(gradeToEdit.id, {
      name: values.gradeName,
      semester: values.grade.semester,
      grade: values.grade.grade,
      credits: values.grade.credits,
    });
    const updatedGrades = await getGrades();
    setGrades(updatedGrades);
    form.resetFields();
  };

  const onGradeChange = async (gradeName) => {
    const grades = await getGrades();
    const chosenGrade = grades.find((grade) => grade.name === gradeName);
    setGradeToEdit(chosenGrade);
    form.setFieldsValue({
      grade: {
        semester: chosenGrade.semester,
        grade: chosenGrade.grade,
        credits: chosenGrade.credits,
      },
    });
  };

  const handleRemove = async () => {
    await deleteGrade(gradeToEdit.id);
    const updatedGrades = await getGrades();
    setGrades(updatedGrades);
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="gradeName"
        label="Grade Name"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGradeChange}
          allowClear
        >
          {grades.map((grade) => (
            <Option key={grade.id} value={grade.name}>
              {grade.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name={["grade", "semester"]}
        label="Semester"
        rules={[
          {
            type: "number",
            min: 0,
            max: 9999999,
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["grade", "grade"]}
        label="Grade"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["grade", "credits"]}
        label="Credits"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button type="primary" onClick={handleRemove}>
          Delete
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditGradesForm;
