import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Starlink.css'

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

				<div className="list-wrapper">
                    {satelliteData.map((starlink, index) => {
                        if (starlink.latitude && starlink.longitude) {
                            return (
                                <div className='starlink-container' key={index}>
                                    <div className='starlink-id'>ID: {starlink.id}</div>
                                    <div className='starlink-id'>
                                        Launch Date: {starlink.spaceTrack.LAUNCH_DATE}
                                    </div>
                                    <div className='starlink-lat-long'>
                                        Latitude: {starlink.latitude} - Longitude: {'  '}
                                        {starlink.longitude}
                                    </div>
                                    <div className='starlink-launch'>
                                        {'  '}
                                        Launch #: {starlink.launch}
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
			</div>
		);
	}
}

export default Starlink;
