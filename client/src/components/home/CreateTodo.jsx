/** @format */

import { useState } from 'react';

const CreateTodo = () => {
  const [todoInputValue, setTodoInputValue] = useState('');
  const [datetimeValue, setDatetimeValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(todoInputValue);
    console.log(datetimeValue);

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
