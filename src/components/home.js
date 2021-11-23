import React from "react";

import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8080/blogs");

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && <BlogList blogs={[data]} />}
    </div>
  );
};

export default Home;
