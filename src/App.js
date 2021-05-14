import React from "react";
import './style.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import CardWrapper from "./components/CardWrapper";
import API from "./components/API";
import Checkbox from "./components/Checkbox";
import CheckboxWrapper from "./components/CheckboxWrapper";
import FormFilter from "./components/FormFilter";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  async componentDidMount() {
    const userList = [];

    for (let i = 0; i < 8; i++) {
      const employeeData = await API();
      userList.push(employeeData.data.results[0]);
    }
    this.setState({ userList });
    console.log(userList);
  }

  sortList = () => {
    const sorted = this.state.userList.sort((a, b) => {
      if (a.name.last < b.name.last) { return -1; }
      if (a.name.last > b.name.last) { return 1; }
      return 0;
    })
    this.setState({ userList: sorted })
  }

  filterList = (value) => {
    const users = this.state.userList;
    const filteredList = users.filter(user => {
      if (user.location.country.toLowerCase().includes(value))
        return true;
      else { return false }
    });
    this.setState({ userList: filteredList })
  }


  render() {
    return (
      <Wrapper>
        <Header>Employee Directory</Header>
        <CheckboxWrapper>
          <Checkbox checked={this.sortList} />
          <FormFilter filterList={this.filterList} />
        </CheckboxWrapper>
        <CardWrapper>
          {this.state.userList.map(employee => (
            < Card
              key={this.state.userList.indexOf(employee)}
              name={`${employee.name.title} ${employee.name.first} ${employee.name.last}`}
              src={employee.picture.large}
              email={employee.email}
              location={employee.location.country}
            />
          ))}
        </CardWrapper>
      </Wrapper>

    )
  }
}

export default App;
