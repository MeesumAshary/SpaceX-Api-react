import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Launches from './components/Launches/Launches';
import About from './components/About/About';
import Rockets from './components/Rockets/Rockets';
import Starlink from './components/Starlink/Starlink';

function App() {
  return (
    <div className="App">

      <Home />
      <Launches />
      <About />
      <Rockets/>
      <Starlink/>

    </div>
  );
}

export default App;
