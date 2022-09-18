import Todo from "./Todo/Todo";
import "./App.css";
import Nav from "./Nav/Nav";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);
  let [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAddTodo = (event) => {
    const newTodo = {
      id: uuidv4(),
      title: input,
    };
    setTodoList([...todoList, newTodo]);
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    let newTodoList = [...todoList];
    newTodoList = newTodoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>Todo List</h1>
        <Todo todoList={todoList} handleDeleteTodo={handleDeleteTodo} />
        <hr />
        <input
          type="text"
          value={input}
          onChange={(event) => handleInput(event)}
        />
        <button type="button" onClick={(event) => handleAddTodo(event)}>
          Add Todo
        </button>
      </header>
    </div>
  );
}

export default App;
