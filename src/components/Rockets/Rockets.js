import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import RocketDetails from '../RocketDetails/RocketDetails';
import './Rockets.css';

function Rockets(props) {
	const [rockets, setRockets] = useState(null);
	const url = 'https://api.spacexdata.com/v4/rockets/';

	useEffect(() => {
		axios.get(url).then((res) => {
			// console.log(res.data);
			setRockets(res.data);
		});
	}, []);

	if (rockets) {
		return (
			<div className='page-container'>
				<h1>Rockets</h1>

				<div className='rocket-container'>
					{rockets.map((rocket, index) => {
						return (
							<div className='rocket-card' key={index}>
								<div className='rocket-img-wrapper'>
									<img
										className='rocket-img'
										src={rocket.flickr_images[1]}
										alt=''
									/>
								</div>
								<div className='rocket-name-des'>
									<div className='rocket-name'>{rocket.name} </div>
									<div className='rocket-description'>{rocket.description}</div>
								</div>
								<div className = 'launch-data'>
									<div className='first-flight'>First-Flight: {rocket.first_flight}</div>
									<div className='cost'>Cost: $ {rocket.cost_per_launch}</div>
									<div className='stages'>Stages: {rocket.stages}</div>
									<div className='boosters'>Boosters: {rocket.booster}</div>
								<Link
									className='rocket-link'
									to={`/RocketDetails/${rocket.id}`}>
									<div> Details... </div>
								</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Rockets;
