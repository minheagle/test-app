import { Routes, Route, Navigate } from "react-router-dom";

import TaskListPage from "./pages/TaskListPage/index.jsx";
import CreateTaskPage from "./pages/CreatTaskPage/index.jsx";
import UpdateTaskPage from "./pages/UpdateTaskPage/index.jsx";

import * as S from "./styles.js";

function App() {
  return (
    <S.Container>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />}></Route>
        <Route path="/tasks" element={<TaskListPage />}></Route>
        <Route path="/tasks/create" element={<CreateTaskPage />}></Route>
        <Route path="/tasks/:id/update" element={<UpdateTaskPage />}></Route>
      </Routes>
    </S.Container>
  );
}

export default App;
