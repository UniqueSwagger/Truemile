import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        json && setData(json);
      } catch (error) {
        throw error.message;
      }
    };
    fetchData();
  }, [url]);
  return data;
};

export default useFetch;
