import React, { Component } from 'react';
import SearchForm from './container/searchForm'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Please enter the user name to continue the search</h1>
        <SearchForm />
       </div>
    );
  }
}

export default App;
