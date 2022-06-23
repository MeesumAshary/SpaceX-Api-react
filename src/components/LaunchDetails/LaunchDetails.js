import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
			<div>
				<h1>Launch Details</h1>

				<div className='launchDetails-container' key={launchDetails.id}>
					<div className='launchDetails-name'>{launchDetails.name}</div>
					{launchDetails.name.split(' ')[0]}
					<div className='flight-number'>
						Flight # {launchDetails.flight_number}
					</div>
					<div className='launchDetails-id-date'>
						{launchDetails.id} - {launchDetails.date_local}
					</div>
					<div className='launchDetails-patch'>
						<img src={launchDetails.links.patch.small} alt='' />
					</div>
					<div>
						<iframe
							src={`https://www.youtube.com/embed/${launchDetails.links.youtube_id}`}
							frameBorder='0'
							allow='autoplay; encrypted-media'
							allowFullScreen
							title='video'
						/>{' '}
					</div>
				</div>
			</div>
		);}
}

export default LaunchDetails;
