import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import "../notfound/NotFound.css";

const NotFound = () =>{
    return(
        <div className="not-found">
            <h1>Page not found</h1>
            <FontAwesomeIcon icon={faVideoSlash}></FontAwesomeIcon>
        </div>
    )
}

export default NotFound