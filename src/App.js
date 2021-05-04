import React from "react";
import './style.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <Wrapper>
        <Header>Employee Directory</Header>

      </Wrapper>

    )
  }
}

export default App;
