import React from "react";
import "./DeleteButton.css";

const DeleteButton = props => (
    <button className="delete-button btn btn-danger" {...props}>
        Delete Article
    </button>    
);

export default DeleteButton;