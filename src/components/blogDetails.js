import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(
    `http://localhost:8080/blogs/${id}`
  );
  const history = useHistory();

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/blogs/${id}`).then(() => {
      history.push("/");
    });
  };

  return (
    <div className='blog-details'>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <div className='blog-details__header'>
            <h2>{data.title}</h2>
            <h3>Written by {data.author}</h3>
          </div>

          <p>{data.body}</p>
          <button className='button__delete' onClick={handleDelete}>
            delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
