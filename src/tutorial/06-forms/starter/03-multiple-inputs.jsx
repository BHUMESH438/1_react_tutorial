import { useState } from 'react';

const MultipleInputs = () => {
  const initialUserState = {
    name: '',
    email: '',
    password: ''
  };

  const [user, setUser] = useState(initialUserState);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
    setUser(initialUserState);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' value={user.name} id='name' onChange={handleChange} name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' value={user.email} onChange={handleChange} name='email' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' value={user.password} onChange={handleChange} name='password' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;