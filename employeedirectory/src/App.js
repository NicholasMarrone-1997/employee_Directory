import './App.css';
import Header from "../src/components/Header/Header";
import Table from "../src/components/Table/Table";

function App() {
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

export default App;
