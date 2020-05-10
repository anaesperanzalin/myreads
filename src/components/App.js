import React from "react";
import SearchBar from "./SearchBar";
import { getAll, search } from "./booksAPI";
import BookList from "./BookList";

class App extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getAll().then((books) => {
      this.setState({
        books: books,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MY READS</h1>

          <button className= "plus"> Add your books here + </button>

          <div> {this.setState.GetAllBooks} </div>

          <div> <h1>Currently Reading  </h1></div>
          <div> <h1>Want to read  </h1></div>
          <div> <h1> Read already  </h1></div>

          {this.state.books.length > 0 ? (
            this.state.books.map((book) => (
              <BookList smallThumbnail={book.imageLinks.smallThumbnail} />
            ))
          ) : (
            <p>No Books Yet</p>
          )}
          <div className="ui container" style={{ marginTop: "50px" }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
          </div>
        </header>
      </div>
    );
  }
}
export default App;
