import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Form, Input } from "antd";

import Todo from "../Todo/Todo.jsx";
import * as S from "./styles.js";

const Tasks = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (values) => {
    const newTodo = {
      id: uuidv4(),
      ...values,
    };
    setTodoList([newTodo, ...todoList]);
  };

  const handleDeleteTodo = (id) => {
    let newTodoList = [...todoList];
    newTodoList = newTodoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const handleUpdateTodo = (values, id) => {
    const newTodoList = [...todoList];
    const newTodo = {
      ...values,
      id: id,
    };
    const index = todoList.findIndex((item) => item.id === id);
    newTodoList.splice(index, 1, newTodo);
    setTodoList(newTodoList);
  };

  const renderTodoList = () => {
    return todoList.map((item) => {
      return (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      );
    });
  };
  return (
    <S.ContainerTask>
      <S.Title>
        <h1>Todo List</h1>
        <Button type="primary">Create</Button>
      </S.Title>
      <Form
        name="addTodo"
        layout="vertical"
        onFinish={(values) => handleAddTodo(values)}
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
      <hr />
      {renderTodoList()}
    </S.ContainerTask>
  );
};

export default Tasks;
