import { useEffect, useState } from "react";
import yelp from "../apis/yelp";

export default (term) => {
  const [debounceTerm, setDebounceTerm] = useState(term);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(term);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);
  useEffect(() => {
    searchHandler();
  }, [debounceTerm]);

  const searchHandler = async () => {
    try {
      const response = await yelp.get(`/search`, {
        params: {
          limit: 50,
          term: debounceTerm,
          location: "Salt Lake City",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong! Try again later.");
    }
  };
  return [results, errorMessage];
};
