import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteTaskAction } from "../../redux/actions";

import Todo from "./Todo";

import { Button } from "antd";
import * as S from "./styles";

const TaskListPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { taskList } = useSelector((state) => state.task);

  const handleDeleteTask = (id) => {
    dispatch(deleteTaskAction({ id: id }));
  };

  const renderTaskList = () => {
    return taskList.map((item) => {
      return (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          handleDeleteTask={handleDeleteTask}
        />
      );
    });
  };

  return (
    <S.ContainerTask>
      <S.Title>
        <h1>Todo List</h1>
        <Button type="primary" onClick={() => navigate(`/tasks/create`)}>
          Create
        </Button>
      </S.Title>
      <hr />
      {renderTaskList()}
    </S.ContainerTask>
  );
};

export default TaskListPage;
