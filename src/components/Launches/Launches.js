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
			console.log(res.data);
		});
		axios.get(url + '/latest').then((data) => {
			setLatestLaunchData(data.data);
			console.log(data.data);
		});
	}, []);



	if (launchData && latestLaunchData) {
		return (
			<div>
				<div className='latest-launch-container'>
					<h2>Latest Launch</h2>
					<div className='launch-card'>
						<div className='launch-name'>{latestLaunchData.name}</div>
						<div className='launch-data'>
							<div className='launch-id'>
								<span className='label'>Launch ID : </span> {latestLaunchData.id}
							</div>
							<div className='launch-date'>
								<span className='label'>Date : </span> {latestLaunchData.date_local}
							</div>
							<div className='launch-success'>
								<span className='label'>Success:</span>{' '}
								{latestLaunchData.success ? <span>Yes</span> : <span>No</span>}
							</div>
							<div className='launch-upcoming'>
								<span className='label'>Upcoming:</span>{' '}
								{latestLaunchData.upcoming ? <span>Yes</span> : <span>No</span>}
							</div>
						</div>
						<div className='patch-details'>
							<div className='launch-patch'>
								<img src={latestLaunchData.links.patch.small} alt='' />
							</div>
							<Link
								className='launch-link'
								to={`/LaunchDetails/${latestLaunchData.id}`}>
								<div> Details...</div>
							</Link>
						</div>
					</div>
				</div>

				<div className='launch-container'>
					<h2>Previous Launches</h2>
					{launchData.map((Launch, index) => {
						return (
							<div className='launch-card' key={index}>
								<div className='launch-name'>{Launch.name}</div>
								<div className='launch-data'>
									<div className='launch-id'>
										<span className='label'>Launch ID : </span> {Launch.id}
									</div>
									<div className='launch-date'>
										<span className='label'>Date : </span> {Launch.date_local}
									</div>
									<div className='launch-success'>
										<span className='label'>Success:</span>{' '}
										{Launch.success ? <span>Yes</span> : <span>No</span>}
									</div>
									<div className='launch-upcoming'>
										<span className='label'>Upcoming:</span>{' '}
										{Launch.upcoming ? <span>Yes</span> : <span>No</span>}
									</div>
								</div>
								<div className='patch-details'>
									<div className='launch-patch'>
										<img src={Launch.links.patch.small} alt='' />
									</div>
									<Link
										className='launch-link'
										to={`/LaunchDetails/${Launch.id}`}>
										<div> Details...</div>
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

export default Launches;
