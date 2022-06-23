import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Launches from './components/Launches/Launches';
import About from './components/About/About';
import Rockets from './components/Rockets/Rockets';
import Starlink from './components/Starlink/Starlink';
import {Route, Routes, Link} from 'react-router-dom';
import NavBar from './components/Nav/NavBar';

function App() {
	return (
		<div className='App'>
			<NavBar/>

		</div>
	);
}

export default App;
