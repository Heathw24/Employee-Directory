import React from "react"

function SearchBar(props){
    return(
        <div>
            <input 
            type="text" 
            onChange={props.handleInputChange}
            value={props.search}
            placeholder="Search for an employee"
            ></input>
        </div>
    )
}

export default SearchBar;