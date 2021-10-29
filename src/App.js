import { render } from "@testing-library/react";
import React, { Component } from "react";
import CardList from "./Cards/cards-list";
import SearchBox from "./Cards/SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = data.json().then(users => this.setState({ robots: users }));
  }
  onSearch = (event) => {
    console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });
    return (
      <div>
        <h1 className="tc">Robots friend</h1>
        <SearchBox searchChange={this.onSearch} />
        <CardList robots={filterRobots} />
      </div>
    );
  }
}
export default App;
