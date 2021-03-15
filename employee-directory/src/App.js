
import './App.css';
import React, { Component } from 'react';
import API from "./components/API";
import SearchBar from "./components/SearchBar";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      searchResult: "",
      filteredEmployees: [],
    }
  }

  async componentDidMount() {
    const employeeData = await API
    this.setState({
      employees: employeeData,
      searchResult: "",
      filteredEmployees: []
    }
    )
  }


  render() {

    return(
    <div className="App">
      <header className="">
        <h1>Employee Directory</h1>
        <p>Use the search box to narrow results</p>
      </header>
      <div>
        <SearchBar 
        handleInputChange={(event) => this.setState({ searchResult: event.target.value.toLowerCase() })}
        // search = "fill in props " handleChange = "Fill in props"
        ></SearchBar>
      </div>
    </div>
  
    )}

}
export default App;
