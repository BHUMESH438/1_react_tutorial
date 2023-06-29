import { useState } from 'react';

const ToggleChallenge = () => {
  const [user, setuser] = useState(false);

  return (
    <>
      <button className='btn' onClick={() => setuser(!user)}>
        press
      </button>
      {user ? <h2>toggle challenge true</h2> : <Alert />}
    </>
  );
};
const Alert = () => {
  return (
    <>
      {' '}
      <div className='alert alert-danger'>hello world</div>
      <h2>toggle challenge false</h2>{' '}
    </>
  );
};

export default ToggleChallenge;
