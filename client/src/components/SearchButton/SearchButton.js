import React from "react";
import "./SearchButton.css";

const SearchButton = props => (
    <button className="search-button btn btn-success" {...props}>
        Search For Articles
    </button>   
)

export default SearchButton;