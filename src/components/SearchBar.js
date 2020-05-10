import React from "react";
import { search } from "./booksAPI";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
    books: [],
    term: ""
    };
  }

    onFormSubmit = async (event) => {
      event.preventDefault();

      await search(this.state.term).then(res => this.setState({ books: res}));

      
    };
  

//   async componentDidMount() {
//     const books = await getAll();

//     this.setState({
//       books,
//     });
//   }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Book Search </label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
        <button onClick={this.getAllBooks}>Get all the books</button>
    <p> {`Found ${this.state.books.length} results`}</p>
      </div>
    );
  }
}

export default SearchBar;
