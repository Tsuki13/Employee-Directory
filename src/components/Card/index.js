import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={props.src} alt={props.name} />
            </div>
            <div className="card-body">
                <ul id="card-info">
                    <li>
                        {props.name}
                    </li>
                    <li>
                        {props.email}
                    </li>
                    <li>
                        {props.phone}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;