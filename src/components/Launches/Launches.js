import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Launches(props) {
	let url = 'https://api.spacexdata.com/v5/launches';

	const [launchData, setLaunchData] = useState(null);
	const [latestLaunchData, setlatestLaunchData] = useState(null);

	useEffect(() => {
		axios.get(url)
		.then((res) => {
			setLaunchData(res.data);
			console.log(res.data);
		});
	}, []);

	if(launchData){
	return (
		<div className ='launch list'>
			<h1>Launches</h1>
			
				{launchData.map((Launch, index) => {
					return (
						<div className='launch-container' key={index}>
							<div className='launch-name'>{Launch.name}</div>
							<div className ='launch-id-date'>
								{Launch.id} - {Launch.date_local}
							</div>
							<div className ='launch-patch'>
								<img src={Launch.links.patch.small} alt='' />
							</div>
						</div>
					);
				})}
			
		</div>
	);
	}
}

export default Launches;
