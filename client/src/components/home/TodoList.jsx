/** @format */

import SearchBar from './SearchBar';
import Todo from './Todo';

const TodoList = ({ todos }) => {
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
          <Todo todos={todos} />
        </tbody>
        {!Array.isArray(todos) || todos.length === 0 ? (
          <p>No Todos available</p>
        ) : (
          ''
        )}
      </table>
    </div>
  );
};
export default TodoList;
