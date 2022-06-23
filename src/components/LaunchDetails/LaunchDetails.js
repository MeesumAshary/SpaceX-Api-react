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
    
    return (<div>
        <h1>Launche Details</h1>

    </div>);
}

export default LaunchDetails;
