import './App.css';
import Header from "../src/components/Header/Header";
import Table from "../src/components/Table/Table";
import React from 'react';

class App extends React.Component {

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
