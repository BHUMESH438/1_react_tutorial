import { useContext } from 'react';
import { Navbarcontext } from './Navbar';
import { useContext } from 'react';
const UserContainer = () => {
  const { user, logout } = useContext();
  //1.context provide 2 provider and consumer
  //2.scince usecontext is there so there is no need of provider

  return (
    <>
      {user ? (
        <div className='user-continer'>
          {/* hi there mfk {user.name}- cannot read the properties of nulll */}
          {/* optional chainnig operator  will return undefined instead of null */}
          hi there mfk {user?.name?.toUpperCase()}
          <button className='btn' onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <h1>please login</h1>
      )}
    </>
  );
};
export default UserContainer;
