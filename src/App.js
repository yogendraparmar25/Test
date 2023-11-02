import React from 'react';
import SignupForm from './Loginsignup/signup';
import LoginForm from './Loginsignup/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todolist from './todo-list/todo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/todo" element={<Todolist />} />

      </Routes>
    </Router>
  );
}

export default App;
