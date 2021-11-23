import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetch = new AbortController();

    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
          setError(null);
        })

        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
