import React from "react";
import "./style.css";

class Checkbox extends React.Component {
    handleCheckboxChange = event => {
        this.props.checked();
    }

    render() {
        return (
            <label id="checkBox">
                <input type="checkbox"
                    value="lastName"
                    name="name"
                    onChange={e => this.handleCheckboxChange(e)}
                />
                <span>Sort by last name</span>
            </label>
        )
    }
}
export default Checkbox;