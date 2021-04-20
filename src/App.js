import './App.css';
import Header from "../src/components/Header/Header";
import Table from "../src/components/Table/Table";
import axios from "axios";
import React from 'react';

class App extends React.Component {

  state = {
    employeeList: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=20&nat=us`)
      .then(res => {
        this.setState({ employeeList: res.data.results });
      });
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Table />
      </main>
    </div>
    );
  }
}

export default App;
