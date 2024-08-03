import './App.css';
import Header from './components/Header';
import Record from './components/Record';

function App() {
  return (
    <div className="App">
      <table>
        <Header onSearch={this.searchReacord} onSort={this.onSort}></Header>
        <Record records={this.state.records}></Record>
      </table>
    </div>
  );
}

export default App;
