
import './App.css';
import React, { Component } from 'react';
import API from "./components/API";
import SearchBar from "./components/SearchBar";
import Profiles from "./components/Profiles.js";

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

  
  handleSearchChange = event => {
    //added toLowerCase to handle any case entry
    const newFilteredEmployees = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || employee.name.last.toLowerCase().includes(event.target.value.toLowerCase()));    
    this.setState({ filteredEmployees: newFilteredEmployees });
  };
  



  render() {

    return(
    <div className="App">
      <header className="">
        <h1>Employee Directory</h1>
        <p>Use the search box to narrow results</p>
      </header>
      <div>
        <SearchBar 
        handleInputChange={this.handleSearchChange}
        // search = "fill in props " handleChange = "Fill in props"
        ></SearchBar>
        <Profiles employees={ this.state.filteredEmployees.length === 0 ? this.state.employees : this.state.filteredEmployees} searchResult={this.handleSearchChange}></Profiles>
      </div>
    </div>
  
    )}

}
export default App;
