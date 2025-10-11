/** @format */

import { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='form-container'>
      <h1>Sign up</h1>
      <form className='auth-form' onSubmit={submitHandler}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          name='name'
          placeholder='Enter the name'
          required
        />
        <br />
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='password'
          placeholder='Enter the email'
          required
        />
        <br />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          placeholder='Enter the password'
          required
        />
        <br />
        <button type='submit'>Sign up</button>
        <button type='button' onClick={() => console.log('just clicked')}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signup;
