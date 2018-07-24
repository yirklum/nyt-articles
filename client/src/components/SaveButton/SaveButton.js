import React from "react";
import "./SaveButton.css";

const SaveButton = props => (
    <btn className="save-button btn btn-success" {...props}>
        Save Article
    </btn>    
);

export default SaveButton;