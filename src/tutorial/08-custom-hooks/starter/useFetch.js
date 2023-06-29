import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const data = await resp.json();
        setData(data);
      } catch (error) {
        setIsError(true);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { isLoading, isError, data };
  //return [isLoading, isError, data]; //will be destructured
  // order matters
  // don't place user JSX before loading or error
}
