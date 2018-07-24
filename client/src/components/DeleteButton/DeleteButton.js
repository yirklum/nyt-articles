import React from "react";
import "./DeleteButton.css";

const DeleteButton = props => (
    <btn className="delete-button btn btn-danger" {...props}>
        Delete Article
    </btn>    
);

export default DeleteButton;