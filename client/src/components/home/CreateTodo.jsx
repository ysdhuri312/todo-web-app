/** @format */

const CreateTodo = () => {
  return (
    <>
      <form className='todo-container'>
        <input
          className='todo'
          type='taxt'
          value={''}
          name='todo'
          placeholder='Add a Todo'
        />
        <input className='datetime' type='datetime-local' name='completed-by' />
        <button className='todo-btn' type='submit'>
          ADD
        </button>
      </form>
    </>
  );
};
export default CreateTodo;
