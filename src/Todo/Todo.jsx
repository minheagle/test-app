const Todo = (props) => {
  const { todoList, handleDeleteTodo } = props;

  return (
    <div className="container-todo">
      {todoList.map((todo) => {
        return (
          <div className="todo-item" key={todo.id}>
            <li>{todo.title}</li>
            <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
