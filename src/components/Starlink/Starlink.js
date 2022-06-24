import React from 'react';
import { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import './Starlink.css';

function Starlink(props) {
	const [satelliteData, setSatelliteData] = useState(null);
   

	const url = 'https://api.spacexdata.com/v4/starlink';

 

	useEffect(() => {
		axios.get(url).then((res) => {
			setSatelliteData(res.data);
			console.log(res.data);
		});

	}, []);



	if (satelliteData) {
		return (
			<div>
				<h1>Starlink</h1>

				<div className='list-wrapper'>
					{satelliteData.map((starlink, index) => {
						if (starlink.latitude && starlink.longitude) {
							return (
								<div className='starlink-container' key={index}>
									<div className='starlink-name'>
										Name: {starlink.spaceTrack.OBJECT_NAME}
									</div>
									<div className='starlink-id'>
										ID: {starlink.spaceTrack.OBJECT_ID}
									</div>
									<div className='starlink-id'>
										Launch Date: {starlink.spaceTrack.LAUNCH_DATE}
									</div>
									<div className='starlink-lat'>
										Latitude: {starlink.latitude} -
									</div>
									<div className='starlink-long'>
										Longitude: {'  '}
										{starlink.longitude}
									</div>

									<Link to={`/LaunchDetails/${starlink.launch}`}>
										<div className='starlink-launch'>
											Launch ID:
											{starlink.launch}
										</div>
									</Link>
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	}
}

export default Starlink;
