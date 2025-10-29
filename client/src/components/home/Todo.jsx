/** @format */

const Todo = () => {
  return (
    <tr className='todo'>
      <td>{'Taking bath '}</td>
      <td>{'12-30-2025 12:35'}</td>
      <td>{'12-30-2025 12:35'}</td>
      <td>Completed</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
        <button>Ongoing/ Completed</button>
      </td>
    </tr>
  );
};
export default Todo;
