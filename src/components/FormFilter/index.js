import React from "react";
import "./style.css";

class FormFilter extends React.Component {
    state = {
        country: ""
    }

    handleFilterChange = (e) => {
        e.preventDefault();

        this.props.filterList(this.state.country);
    }

    render() {
        return (
            <form id="filterBox">
                <label id="filterText">Enter Country to Filter by:
                <input type="text"
                        id="country"
                        className="input"
                        value={this.state.country}
                        onChange={e => this.setState({ country: e.target.value })}
                    ></input>
                    <input type="submit" value="Submit" onClick={e => this.handleFilterChange(e)}></input>
                </label>
            </form >
        )
    }
}


export default FormFilter;