/** @format */

import React from 'react';
import CreateTodo from '../components/home/CreateTodo';
import StatusBar from '../components/home/StatusBar';

const Home = () => {
  return (
    <div>
      <StatusBar />
      <CreateTodo />
    </div>
  );
};

export default Home;
