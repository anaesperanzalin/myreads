import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term){
        console.log(term);
    }


    render() {
      return( 
        <div className="App">
            <header className="App-header">
            <h1>MY READS</h1>
            <div>Currently reading </div>
            <div> Want to read </div>
            <div> Read </div>
            <button>Find more books</button>

            <div className="ui container" style={{ marginTop: "50px" }}>
            <SearchBar onSubmit={this.onSearchSubmit}/></div>
            </header>
        </div>
      )
  }
}
export default App;
