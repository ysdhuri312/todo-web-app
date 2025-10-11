/** @format */

import { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');

    console.log(email, password);
  };

  return (
    <div className='form-container'>
      <h1>Sign in</h1>
      <form className='auth-form' onSubmit={submitHandler}>
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
        <button type='submit'>Sign in</button>
        <button type='button' onClick={() => console.log('Just clicked')}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signin;
