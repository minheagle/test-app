import { Card, Form, Input, Space, Button } from "antd";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateTaskAction } from "../../redux/actions";
import { useDispatch } from "react-redux";

const UpdateTaskPage = ({ title, content }) => {
  const [updateForm] = Form.useForm();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdateTask = (values, id) => {
    dispatch(updateTaskAction({ values: values, id: id }));
  };
  const [isUpdate, setIsUpdate] = useState(true);

  const renderTodoContent = () => {
    return (
      <Form
        form={updateForm}
        layout="vertical"
        initialValues={{
          title: title,
          content: content,
        }}
        onFinish={(values, id) => {
          handleUpdateTask(values, id);
          setIsUpdate(false);
        }}
      >
        <Form.Item
          label="TITLE"
          name="title"
          rules={[
            {
              required: true,
              message: "Bạn cần nhập Todo!",
            },
            {
              type: "string",
              min: 4,
              message: "Todo phải lớn hơn 4 kí tự!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="CONTENT"
          name="content"
          rules={[
            {
              required: true,
              message: "Bạn cần nhập nội dung!",
            },
            {
              type: "string",
              min: 15,
              message: "Nội dung phải nhiều hơn 4 từ!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    );
  };

  return (
    <Card size="small" title="UPDATE TASK">
      {renderTodoContent()}
      <Card size="small" style={{ marginTop: 16 }}>
        <Space style={{ marginTop: 8 }}>
          {isUpdate ? (
            <>
              <Button type="primary" onClick={() => updateForm.submit()}>
                Lưu
              </Button>
              <Button onClick={() => setIsUpdate(false)}>Hủy</Button>
            </>
          ) : (
            <Button type="primary" ghost onClick={() => setIsUpdate(true)}>
              Sửa
            </Button>
          )}
          <Button
            type="primary"
            onClick={() =>
              navigate("/tasks", {
                state: {
                  prevPath: pathname,
                },
              })
            }
          >
            ToDo List
          </Button>
        </Space>
      </Card>
    </Card>
  );
};

export default UpdateTaskPage;
