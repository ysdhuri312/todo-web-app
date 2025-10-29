/** @format */

const Todo = ({ todos }) => {
  if (!Array.isArray(todos) || todos.length === 0) {
    console.log(todos);
    return '';
  }

  return (
    <>
      {todos.map((todo, index) => (
        <tr className='todo' key={index}>
          <td>{todo.todoInputValue}</td>
          <td>{todo.current_datetime}</td>
          <td>{todo.due_date}</td>
          <td>{todo.status}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
            <button>Ongoing/ Completed</button>
          </td>
        </tr>
      ))}
    </>
  );
};
export default Todo;
