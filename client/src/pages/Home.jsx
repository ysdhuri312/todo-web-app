/** @format */

import { useState } from 'react';
import CreateTodo from '../components/home/CreateTodo';
import StatusBar from '../components/home/StatusBar';
import TodoList from '../components/home/TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (onAddTodo) => {
    setTodos((prev) => [...prev, onAddTodo]);
  };

  const onDeleteTodo = (todo) => {
    setTodos(todo);
  };

  return (
    <div>
      <StatusBar />
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
    </div>
  );
};

export default Home;
