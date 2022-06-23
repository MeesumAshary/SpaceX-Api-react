import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import RocketDetails from '../RocketDetails/RocketDetails'

function Rockets(props) {
	const [rockets, setRockets] = useState(null);
	const url = 'https://api.spacexdata.com/v4/rockets/';

	useEffect(() => {
		axios.get(url).then((res) => {
			console.log(res.data);
			setRockets(res.data);
		});
	}, []);

	console.log(rockets);
	if (rockets) {
		return (
			<div>
				<h1>Rockets</h1>
				<div>
					{rockets.map((rocket, index) => {
						return (
							<Link to= {`/RocketDetails/${rocket.id}`}>
								<div className='List' key={index}>
									<div>{rocket.name} </div>
									<div>
										<img src={rocket.flickr_images[1]} alt='' />
									</div>
									<div>{rocket.description}</div>
								</div>
							</Link>
						);
					})}
				</div>
				
				
			</div>
		);
	}
}

export default Rockets;
