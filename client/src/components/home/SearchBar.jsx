/** @format */

import { useState } from 'react';

const SearchBar = () => {
  const [searchInputValue, setSearchInputValue] = useState('');

  return (
    <>
      <form className='todo-container'>
        <input
          className='todo-input search-todo'
          type='taxt'
          value={searchInputValue}
          name='todo'
          onChange={(e) => setSearchInputValue(e.target.value)}
          placeholder='Search Task'
        />
        <button className='todo-btn' type='submit'>
          Search
        </button>
        <button className='todo-btn'>Filter</button>
        <button className='todo-btn'>Delete all</button>
      </form>
    </>
  );
};
export default SearchBar;
