import React from "react";
import axios from "axios";

import "./index.scss";

import Card from "../../components/Card";

import api from "../../api";

import { response, book } from "../../api/interfaces";

type Props = {};

type State = {
  title: string;
  query: string;
  books: book[];
};

class Main extends React.Component<Props, State> {
  state: State = {
    title: process.env.REACT_APP_TITLE || "Title not found in env file",
    query: "",
    books: [],
  };

  sq(query: string) {
    this.setState({ query });
  }

  sb(books: book[]) {
    this.setState((state) => ({
      books: books,
    }));
  }

  fetch = () => {
    const URI = "search";

    const params = {
      query: this.state.query,
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

        this.sb(books);
      });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Marvel API request got cancelled");
      } else {
        throw error;
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
        <div className="content">
          <div className="searchContainer">
            <input
              className="search"
              onChange={(e) => this.sq(e.target.value)}
            />
            <button onClick={this.fetch}>Search</button>
          </div>
          <div className="results">
            {this.state.books.map((book) => (
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
  }
}

export default Main;
