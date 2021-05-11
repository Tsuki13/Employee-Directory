import React from "react";
import "./style.css";

function CheckboxWrapper(props) {
    return <div className="checkbox-wrapper">{props.children}</div>
}

export default CheckboxWrapper;