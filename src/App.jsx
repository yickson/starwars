import logo from './assets/starwarslogo.png'
import './App.css'
import List from "./components/List";
import People from "./components/People";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width={250} />
        <People/>
      </header>
    </div>
  )
}

export default App
