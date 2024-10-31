import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TodoApp from './TodoApp';
import TodoEdit from './TodoEdit';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';
import User from './User';
import Files from './Files';
import UserSettings from './UserSettings';
import NewsDetail from './components/NewsDetail';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoEdit, setTodoEdit] = useState(null);

  // Nạp todos từ LocalStorage khi ứng dụng load
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Cập nhật LocalStorage mỗi khi todos thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />}>
            <Route path="todo-app" element={<TodoApp todos={todos} setTodos={setTodos} setTodoEdit={setTodoEdit} />} />
            <Route path="todo-app/edit/:id" element={<TodoEdit todos={todos} setTodos={setTodos} todoEdit={todoEdit} />} />
            <Route path="user" element={<User />} />
            <Route path="user/user-settings" element={<UserSettings />} />
            <Route path="files" element={<Files />} />
            <Route path="user/news/:id" element={<NewsDetail />} /> {/* Thêm Route cho NewsDetail */}
          </Route>
          <Route path="/" element={
            <>
              <h1>Welcome to the Home Page</h1>
              <p>This is the main content of the home page.</p>
              <Link to="/login">Go to Login</Link>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
