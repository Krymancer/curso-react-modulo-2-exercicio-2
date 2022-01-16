import React, { useState, useEffect } from "react";
import axios from "axios";

import "./index.scss";

import Card from "../../components/Card";

import api from "../../api";

import { response, book } from "../../api/interfaces";

type Props = {};

const Main: React.FC<Props> = () => {
  const title = process.env.REACT_APP_TITLE || "Title not found in env file";
  const [q, sq] = useState<string>("");
  const [books, sb] = useState<book[]>([]);

  function fetch() {
    const URI = "search";

    const params = {
      query: q,
    };

    try {
      api<response>("GET", URI, params).then((axiosResponse) => {
        const response = axiosResponse.data.hits; // Extracting data from axios response

        const books = response.map((hit) => {
          const book: book = {
            title: hit.title,
            author: hit.author,
            url: hit.url,
          };
          return book;
        });

        sb(books);
      });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Marvel API request got cancelled");
      } else {
        throw error;
      }
    }
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="content">
        <div className="searchContainer">
          <input className="search" onChange={(e) => sq(e.target.value)} />
          <button onClick={fetch}>Search</button>
        </div>
        <div className="results">
          {books.map((book) => (
            <Card
              key={book.title}
              author={book.author}
              title={book.title}
              url={book.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
