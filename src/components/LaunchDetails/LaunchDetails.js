import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './LaunchDetails.css';

function LaunchDetails(props) {
	
	const [launchDetails, setLaunchDetails] = useState(null);

	const { id } = useParams();

    const url = `https://api.spacexdata.com/v4/launches/${id}`;
    
    useEffect(() => {
			axios.get(url).then((launchRes) => {
				console.log(launchRes.data);
				setLaunchDetails(launchRes.data);
			});
		}, []);
    
        
    if (launchDetails){    
    return (
			<div className='LaunchDetails-page-container'>
				<h1>Launch Details</h1>

				<div className='launchDetails-container' key={launchDetails.id}>
					<div className='launchDetails-data'>
						<div className='launchDetails-name data-list'>
							{' '}
							<span className='label'>Name:</span> {launchDetails.name}
						</div>
						<div className='launchDetails-flightNum data-list'>
							<span className='label'>Flight #:</span>
							{launchDetails.flight_number}
						</div>
						<div className='launchDetails-customer data-list'>
							<span className='label'>Customer:</span>{' '}
							{launchDetails.name.split(' ')[0]}
						</div>
						<div className='launchDetails-date data-list'>
							<span className='label'>Date : </span> {launchDetails.date_local}
						</div>
						<div className='launchDetails-success data-list'>
							<span className='label'>Success:</span>{' '}
							{launchDetails.success ? <span>Yes</span> : <span>No</span>}
						</div>
						<div className='launchDetails-upcoming data-list'>
							<span className='label'>Upcoming:</span>{' '}
							{launchDetails.upcoming ? <span>Yes</span> : <span>No</span>}
						</div>
					</div>
				</div>
					<div className='Video-wrapper'>
						<iframe
							src={`https://www.youtube.com/embed/${launchDetails.links.youtube_id}`}
							frameBorder='0'
							allow='autoplay; encrypted-media'
							allowFullScreen
							title='video'
						/>{' '}
					</div>
			</div>
		);}
}

export default LaunchDetails;
