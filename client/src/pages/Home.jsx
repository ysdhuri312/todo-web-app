/** @format */

import React from 'react';
import CreateTodo from '../components/home/CreateTodo';
import StatusBar from '../components/home/StatusBar';
import TodoList from '../components/home/TodoList';

const Home = () => {
  return (
    <div>
      <StatusBar />
      <CreateTodo />
      <TodoList />
    </div>
  );
};

export default Home;
