
import './App.css';
import React, { Component } from 'react';
import API from "./components/API";
import SearchBar from "./components/SearchBar";
import Profiles from "./components/Profiles.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      searchResult: "",
      DisplayEmployees: [],
    }
  }

  async componentDidMount() {
    const employeeData = await API
    this.setState({
      employees: employeeData,
      searchResult: "",
      DisplayEmployees: employeeData
    }
    )
  }

  
  handleSearchChange = event => {
    const newDisplayEmployees = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || employee.name.last.toLowerCase().includes(event.target.value.toLowerCase()));    
    this.setState({ DisplayEmployees: newDisplayEmployees });
  };
  
  sortEmployeesAsc = event => {
    console.log("successful");
   var sortedEmployees = this.state.DisplayEmployees;
    sortedEmployees.sort((a,b) => (a.name.last > b.name.last) ? 1: -1);
    this.setState({ DisplayEmployees: sortedEmployees});
  };

  sortEmployeesDes = event => {
    console.log("successful");
   var sortedEmployees = this.state.DisplayEmployees;
    sortedEmployees.sort((a,b) => (a.name.last > b.name.last) ? -1: 1);
    this.setState({ DisplayEmployees: sortedEmployees});
  };







  render() {

    return(
    <div className="App">
      <header className="headerbox">
        <h1>Employee Directory</h1>
        <p>Use the search box to narrow results</p>
      </header>
      <div>
        <SearchBar 
        handleInputChange={this.handleSearchChange}
        // search = "fill in props " handleChange = "Fill in props"
        ></SearchBar>
        <Profiles employees={this.state.DisplayEmployees} searchResult={this.handleSearchChange} sortEmployeesAsc={this.sortEmployeesAsc} sortEmployeesDes={this.sortEmployeesDes}></Profiles>
      </div>
    </div>
  
    )}

}
export default App;
