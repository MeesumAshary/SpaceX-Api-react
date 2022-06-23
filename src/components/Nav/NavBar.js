import React from 'react';
import {Link,Route,Routes} from 'react-router-dom'
import Home from '../Home/Home';
import Rockets from '../Rockets/Rockets';
import Launches from '../Launches/Launches';
import Starlink from '../Starlink/Starlink';
import About from '../About/About';
import '../Nav/NavBar.css';

function NavBar(props) {
    return (
			<div className='nav-container'>
				<ul className='nav-bar'>
					<Link to='/'>
						<li className='nav-list home-list'>MeesX</li>
					</Link>
					<Link to='/'>
						<li className='nav-list home-list'>Home</li>
					</Link>
					<Link to='/Rockets'>
						<li className='nav-list rockets-list'>Rockets</li>
					</Link>
					<Link to='/Launches'>
						<li className='nav-list launch-list'>Launches</li>
					</Link>
					<Link to='/Starlink'>
						<li className='nav-list starlink-list'>Starlink</li>
					</Link>
					<Link to='/About'>
						<li className='nav-list about-list'>About</li>
					</Link>
				</ul>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Rockets' element={<Rockets />} />
					<Route path='/Launches' element={<Launches />} />
					<Route path='/Starlink' element={<Starlink />} />
					<Route path='/About' element={<About />} />
				</Routes>
			</div>
		);
}

export default NavBar;