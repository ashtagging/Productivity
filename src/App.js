import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Menu from "./pages/Menu";
import Timer from "./pages/Timer";
import TodoList from "./pages/TodoList";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
