import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState(null);
  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      if (resp.ok === false) {
        setIsError(true);
        return;
      }
      console.log('>>>>>>>>', resp);
      const data = await resp.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
    //when  we done with loading we should set it false to show the msg in the display
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <h1>is loading....</h1>;
  }
  if (isError) {
    return <h1>error loading....</h1>;
  }
  const { avatar_url, name, company, bio } = users; //only after bypassing all the fetch condition we can destructure and if we destructure before the fetch condition, null value cant be desturctured
  return (
    <div>
      <img style={{ width: '150px', borderRadius: '25px' }} src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
