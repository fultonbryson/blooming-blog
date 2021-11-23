import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Bulbasaur");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);

    axios
      .post("http://localhost:8080/blogs", { ...blog })
      .then(() => {
        console.log("Entry added!");
        setTitle("");
        setBody("");
        setAuthor("Bulbasaur");
        setIsLoading(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='create'>
      <form className='create-form' onSubmit={handleSubmit}>
        <div className='create-form__title'>
          <label>Entry Title</label>
          <input
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='create-form__body'>
          <label>Entry Body</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}></textarea>
        </div>

        <div className='create-form__foot'>
          <label>Author</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value='Bulbasaur'>Bulbasaur</option>
            <option value='Ivysaur'>Ivysaur</option>
            <option value='Venusaur'>Venusaur</option>
          </select>
          {!isLoading && <button type='submit'>Submit</button>}
          {isLoading && <button>Submitting...</button>}
        </div>
      </form>
    </div>
  );
};

export default Create;
