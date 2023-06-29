import { useEffect, useState } from 'react';

export default function useFetchPerson(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  //null intentionally setting the state to null it is a primitive value and returns the booloean value false
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setUser(user);
        console.log(user);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  return [isLoading, isError, user]; //will be destructured
  // order matters
  // don't place user JSX before loading or error
}
