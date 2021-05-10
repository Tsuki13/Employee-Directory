import React from "react";
import './style.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import CardWrapper from "./components/CardWrapper";
import API from "./components/API";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    }
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



  render() {
    return (
      <Wrapper>
        <Header>Employee Directory</Header>
        <CardWrapper>
          {this.state.userList.map(employee => (
            < Card
              key={this.state.userList.indexOf(employee)}
              name={`${employee.name.title} ${employee.name.first} ${employee.name.last}`}
              src={employee.picture.large}
              email={employee.email}
              phone={employee.phone}
            />
          ))}
        </CardWrapper>
      </Wrapper>

    )
  }
}

export default App;
