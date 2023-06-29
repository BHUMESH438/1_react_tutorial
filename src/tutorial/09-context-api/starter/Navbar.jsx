import { useState, createContext } from 'react';
import NavLinks from './NavLinks';

export const Navbarcontext = createContext();
const Navbar = () => {
  const [user, setUser] = useState({ name: 'bhu' }); //passing name and function to the child
  function logout() {
    setUser(null);
  }
  console.log('user>>>>>>>>>', user);
  return (
    <Navbarcontext.Provider value={{ user, logout }}>
      {/* pass value and function as an object */}
      <nav className='navbar'>
        <h5>context-api</h5>
        <NavLinks />
      </nav>
    </Navbarcontext.Provider>
  );
};
export default Navbar;
