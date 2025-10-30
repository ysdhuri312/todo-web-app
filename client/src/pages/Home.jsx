/** @format */

import { useState } from 'react';
import CreateTodo from '../components/home/CreateTodo';
import StatusBar from '../components/home/StatusBar';
import TodoList from '../components/home/TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editValue, setEditValues] = useState(null);

  const addTodo = (onAddTodo) => {
    setTodos((prev) => [...prev, onAddTodo]);
  };

  const editTodo = (todo) => {
    setEditValues(todo);
  };

  return (
    <div>
      <StatusBar />
      <CreateTodo addTodo={addTodo} editValue={editValue} />
      <TodoList todos={todos} editTodo={editTodo} />
    </div>
  );
};

export default Home;
