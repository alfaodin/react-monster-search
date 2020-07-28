import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box'
import { CardList } from "./components/card-list/card-list-component";

import './App.css';

class App extends Component {
  myname = 'Christian';

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchInputChanged = (searchInput) => {
    this.setState({ searchField: searchInput });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monst => monst.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Search monster' handleChange={this.onSearchInputChanged}></SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div >
    );
  }
}

export default App;
