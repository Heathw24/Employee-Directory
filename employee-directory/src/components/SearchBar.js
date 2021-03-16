import React from "react"

function SearchBar(props){
    

    return(
        <div className="searchBox">
            <input 
            className="searchbar"
            type="text" 
            onChange={props.handleInputChange}
            value={props.searchResult}
            placeholder="Search for an employee"
            ></input>
        </div>
    )
}

export default SearchBar;