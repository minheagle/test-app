import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createTaskAction } from "../../redux/actions";

import * as S from "./styles";

const CreateTaskPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleCreateProduct = (values) => {
    dispatch(createTaskAction({ values: values }));
  };

  return (
    <S.ContainerTask>
      <S.Title>
        <h1>CREATE TASK</h1>
        <Button type="primary" onClick={() => navigate(`/`)}>
          HOME
        </Button>
      </S.Title>
      <Form
        name="addTodo"
        layout="vertical"
        onFinish={(values) => handleCreateProduct(values)}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Bạn cần nhập title!",
            },
            {
              type: "string",
              min: 4,
              message: "Title phải lớn hơn 4 kí tự!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          rules={[
            {
              required: true,
              message: "Bạn cần nhập content!",
            },
            {
              type: "string",
              min: 10,
              message: "Content phải lớn hơn 10 kí tự!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Add Todo
        </Button>
      </Form>
    </S.ContainerTask>
  );
};

export default CreateTaskPage;
