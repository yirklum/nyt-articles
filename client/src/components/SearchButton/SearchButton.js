import React from "react";
import "./SearchButton.css";

const SearchButton = props => (
    <btn className="search-button btn btn-success" {...props}>
        Search For Articles
    </btn>   
)

export default SearchButton;