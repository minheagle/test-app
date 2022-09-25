import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Todo = (id, title, content, handleDeleteTask) => {
  let navigate = useNavigate();

  return (
    <Card
      title={title}
      bordered={false}
      style={{
        width: 400,
      }}
    >
      <p>{content}</p>
      <Button type="danger" onClick={() => handleDeleteTask(id)}>
        DELETE
      </Button>
      <Button type="primary" onClick={() => navigate(`/tasks/:${id}/create`)}>
        UPDATE
      </Button>
    </Card>
  );
};

export default Todo;
