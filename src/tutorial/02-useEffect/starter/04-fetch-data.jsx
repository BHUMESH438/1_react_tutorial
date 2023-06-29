import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setusers(data);
        console.log('>>>>>>>>>>>data', data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []); //run only on the initial render then the data is fetched
  return (
    <section>
      <h3>fetch data example</h3>
      <ul className='users'>
        {users.map(props => {
          const { id, login, avatar_url, html_url } = props;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
