import React from "react";
import "./SaveButton.css";

const SaveButton = props => (
    <button className="save-button btn btn-success" {...props}>
        Save Article
    </button>    
);

export default SaveButton;