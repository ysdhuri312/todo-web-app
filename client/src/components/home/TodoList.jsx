/** @format */

import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const TodoList = ({ todos, onDeleteTodo }) => {
  const deleteTodo = (index) => {
    const filteredTodo = todos.filter((val, i) => {
      return i !== index;
    });
    console.log(filteredTodo);
    onDeleteTodo(filteredTodo);
  };

  return (
    <div className='todo-list-container'>
      <SearchBar />
      <table className='todo-list'>
        <thead>
          <tr>
            <th>Task</th>
            <th>Created Date</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            const { todoInputValue, current_datetime, due_date, status } = todo;
            return (
              <tr className='todo' key={index}>
                <td>{todoInputValue}</td>
                <td>{current_datetime}</td>
                <td>{due_date}</td>
                <td>{status}</td>
                <td>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                  <button>Ongoing/ Completed</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {!Array.isArray(todos) || todos.length === 0 ? (
        <p>No Todos available</p>
      ) : (
        ''
      )}
    </div>
  );
};
export default TodoList;
