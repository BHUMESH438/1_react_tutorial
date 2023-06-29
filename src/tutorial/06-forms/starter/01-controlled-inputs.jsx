import { useEffect } from 'react';
import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  x`x`;

  //should give e in the fun param
  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email);
    setsubmit(true); //so that the form will be dispalyed after sumbmit and also logged
  };

  useEffect(() => {
    if (submit) {
      localStorage.setItem('submittedName', name);
      localStorage.setItem('submittedEmail', email);
    }
  }, [name, email]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>form</h1>
        <div>
          <label htmlFor='name'>name:</label>
          <input type='text' value={name} id='name' onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='email'>email:</label>
          <input type='email' value={email} id='email' onChange={e => setEmail(e.target.value)} />
        </div>
        <button type='submit'>send</button>
      </form>
      {submit && (
        <div>
          <h1>{name}</h1>
          <h1>{email}</h1>
        </div>
      )}
    </>
  );
};
export default ControlledInputs;
