/** @format */

import SearchBar from './SearchBar';
import Todo from './Todo';

const TodoList = () => {
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
          <Todo />
          <Todo />
          <Todo />
        </tbody>
      </table>
    </div>
  );
};
export default TodoList;
