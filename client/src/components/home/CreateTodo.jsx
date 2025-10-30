/** @format */

import { useEffect, useState } from 'react';

const CreateTodo = ({ addTodo, editValue }) => {
  const [todoInputValue, setTodoInputValue] = useState('');
  const [datetimeValue, setDatetimeValue] = useState('');

  let current_datetime = new Date().toLocaleString();
  let due_date = new Date(datetimeValue).toLocaleString();
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      todoInputValue,
      due_date,
      current_datetime,
      status: 'Ongoing',
    };
    console.log(editValue);

    addTodo(newTodo);
    setTodoInputValue('');
    setDatetimeValue('');
  };

  return (
    <>
      <form className='todo-container' onSubmit={handleSubmit}>
        <input
          className='todo-input'
          type='text'
          value={todoInputValue}
          onChange={(e) => setTodoInputValue(e.target.value)}
          name='todo'
          placeholder='Add a Todo'
        />
        <input
          className='datetime'
          value={datetimeValue}
          type='datetime-local'
          onChange={(e) => setDatetimeValue(e.target.value)}
          name='completed-by'
        />
        <button className='todo-btn' type='submit'>
          ADD
        </button>
      </form>
    </>
  );
};
export default CreateTodo;
