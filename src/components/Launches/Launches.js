import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';

import './Launches.css'

function Launches(props) {
	let url = 'https://api.spacexdata.com/v5/launches';

	const [launchData, setLaunchData] = useState(null);
	const [latestLaunchData, setLatestLaunchData] = useState(null);

	useEffect(() => {
		axios.get(url).then((res) => {
			setLaunchData(res.data);
			// console.log(res.data);
		});
		axios.get(url + '/latest').then((data) => {
			setLatestLaunchData(data.data);
			console.log(data.data);
		});
	}, []);



	if (launchData && latestLaunchData) {
		return (
			<div>
				<h1>Launches</h1>
				<Link to = {`/LaunchDetails/${latestLaunchData.id}`}>
				<div className='latest-launch-container'>
					<h2>Latest Launch</h2>
					<div className='latest-launch-name'>{latestLaunchData.name}</div>
					<div className='latest-launch-id-date'>
						{latestLaunchData.id} - {latestLaunchData.date_local}
					</div>
					<div className='latest-launch-patch'>
						<img src={latestLaunchData.links.patch.small} alt='' />
					</div>
				</div>
					</Link>

				<div className='launch-list'>
					<h2>Previous Launches</h2>
					{launchData.map((Launch, index) => {
						return (
							<Link to = {`/LaunchDetails/${Launch.id}`}>
								<div className='launch-container' key={index}>
									<div className='launch-name'>{Launch.name}</div>
									<div className='launch-id-date'>
										{Launch.id} - {Launch.date_local}
									</div>
									<div className='launch-patch'>
										<img src={Launch.links.patch.small} alt='' />
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Launches;
