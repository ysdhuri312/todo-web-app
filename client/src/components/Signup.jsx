/** @format */

import { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e, action) => {
    e.preventDefault();

    if (action === 'signup') {
      console.log(name, email, password);
    } else {
      console.log('signin');
    }

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='form-container'>
      <h1>Sign up</h1>
      <form className='signup'>
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
        <button type='submit' onClick={(e) => submitHandler(e, 'signup')}>
          Sign up
        </button>
        <button type='submit' onClick={(e) => submitHandler(e, 'signin')}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signup;
